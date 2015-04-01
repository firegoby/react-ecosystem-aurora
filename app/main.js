import React from 'react'
import Router from 'react-router'

import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'

import './shared/main.styl'

const { DefaultRoute, Link, Route, RouteHandler } = Router

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        )
    }
}

const routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="home" handler={Home}/>
        <Route name="about" handler={About}/>
    </Route>
)

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('react-app'))
})

if(__DEV__ && module.hot) {
    module.hot.accept()
}
