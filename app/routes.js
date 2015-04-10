import React from 'react'
import { DefaultRoute, Route, Redirect, NotFoundRoute } from 'react-router'

// App Components
import MainApp from './components/main/main'
import Home from './components/home/home'
import About from './components/about/about'
import NotFound from './components/notFound/notFound'

export default (
    <Route name="app" path="/" handler={MainApp}>
        <Route name="home" path="/" handler={Home}/>
        <Route name="about" path="/about" handler={About}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
)
