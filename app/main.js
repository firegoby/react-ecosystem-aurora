// Main App Entrypoint - rendered within layout of server/views/index.ejs
import 'isomorphic-fetch'

import FluxComponent from 'flummox/component'
import React from 'react'
import Router from 'react-router'

import performRouteHandlerStaticMethod from './shared/performRouteHandlerStaticMethod'
import Flux from './flux'
import routes from './routes'

const flux = new Flux()

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

router.run(async function HandleRunner(Handler, state) {
    const routeHandlerInfo = { state, flux }
    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', routeHandlerInfo)
    React.render(
        <FluxComponent flux={flux}>
          <Handler {...state} />
        </FluxComponent>,
        document.getElementById('react-app')
    )
})

// Enable React Hot Loader when appropriate
if(process.env.BROWSER && module.hot) {
    module.hot.accept()
}
