import 'isomorphic-fetch'
import koa from 'koa'

const app = koa()
app.experimental = true

// quick in-development request logger
/*
app.use(function *(next) {
    console.log(this.path)
    yield next
})
*/

// Proxy webpack-dev-server requests to :3001
import koaRouter from 'koa-router'
import pixie from 'koa-pixie-proxy'
const proxy = pixie({host: 'http://0.0.0.0:3001'})
app.use(koaRouter(app))
app.get('/build/development/:file', proxy('/build/development/:file'), function*() { return } )

// Serve static assets from `public` directory
import serve from 'koa-static'
app.use(serve('public', { maxage: 365 * 24 * 60 * 60 }))

// Setup server-side templating
import nunjucks from 'nunjucks'
nunjucks.configure('./server/views', { autoescape: true })

// Render React app
import React from 'react'
import Router from 'react-router'
import FluxComponent from 'flummox/component'
import Flux from '../app/flux'
import routes from '../app/routes'
import performRouteHandlerStaticMethod from '../app/shared/performRouteHandlerStaticMethod'

// Based/stolen/adapted from Flummox Docs sample isomorphic app
app.use(function *() {
    const router = Router.create({
        routes: routes,
        location: this.url,
        onError: error => {
            throw error
        },
        onAbort: abortReason => {
            const error = new Error()
            if (abortReason.constructor.name === 'Redirect') {
                const { to, params, query } = abortReason
                const url = router.makePath(to, params, query)
                error.redirect = url
            }
            throw error
        }
    })

    const flux = new Flux()

    let appString
    let production = false
    let hash = 'development' // to match output path in config.output.path
    if (process.env.NODE_ENV === 'production') {
        production = true
        hash = require('../public/build/stats.json').hash
    }

    try {
        const { Handler, state } = yield new Promise((resolve, reject) => {
            router.run((_Handler, _state) =>
                resolve({ Handler: _Handler, state: _state })
            )
        })

        const routeHandlerInfo = { state, flux }

        try {
            yield performRouteHandlerStaticMethod(state.routes, 'routerWillRun', routeHandlerInfo)
        } catch (error) {
        }

        appString = React.renderToString(
            <FluxComponent flux={flux}>
                <Handler {...state} />
            </FluxComponent>
        )
    } catch (error) {
        if (error.redirect) {
            return this.redirect(error.redirect)
        }
        throw error
    }

    this.body = nunjucks.render('index.html', { appString, hash, production })
})

// Start listening
const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server started listening on http://localhost:${port}/`)
