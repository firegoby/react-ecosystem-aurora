import React from 'react'
import Router from 'react-router'

import Flux from '../app/flux.js'
import routes from '../app/routes.js'
import performRouteHandlerStaticMethod from '../app/shared/performRouteHandlerStaticMethod'

export default function (req, res) {

    const flux = new Flux()

    // let's just assume `npm run build` has been run at least once
    const hash = require('../public/build/stats.json').hash

    const router = Router.create({
        routes: routes,
        location: req.url,
        onError: error => {
            throw error
        },
        onAbort: abortReason => {
            const error = new Error()
            if (abortReason.constructor.name === 'Redirect') {
                console.log('redirect causing abort')
                const { to, params, query } = abortReason
                console.log(to, params, query)
                const url = router.makePath(to, params, query)
                error.redirect = url
            }
            throw error
        }
    })

    router.run(function (Handler, state) {
        async function run() {
            await performRouteHandlerStaticMethod(state.routes, 'routerWillRunOnServer', state, flux)
            React.withContext(
                { flux },
                () => {
                    let appString = React.renderToString(<Handler />)
                    res.render('index', { production: true, appString: appString, hash: hash })
                }
            )
        }
        run().catch(error => {
            throw error
        })
    })
}
