// Main App Entrypoint - rendered in context of server/views/index.ejs

// NPM Imports
import FluxComponent from 'flummox/component'
import React from 'react'
import Router from 'react-router'

// Import shared styles early
import './shared/main.styl'

// Flux Actions & Stores
import Flux from './flux'

// App Components
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'

// Create flux instance
const flux = new Flux()

// Define the App Hierarchy
class App extends React.Component {
    render() {
        return (
            <FluxComponent flux={flux} connectToStores={{
                messages: store => ({
                    msgs: store.getMessages(),
                    count: store.getCount()
                })
            }}>
                <Header />
                <RouteHandler/>
            </FluxComponent>
        )
    }
}

// Router & Routes
const { DefaultRoute, Link, Route, RouteHandler } = Router
const routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="home" handler={Home}/>
        <Route name="about" handler={About}/>
    </Route>
)

// Dispatch the Router
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('react-app'))
})

// Enable React Hot Loader when appropriate
if(__DEV__ && module.hot) {
    module.hot.accept()
}
