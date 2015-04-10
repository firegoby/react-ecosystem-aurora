import FluxComponent from 'flummox/component'
import React from 'react'
import { RouteHandler } from 'react-router'
import Header from '../header/header'

// Import shared styles early
if (process.env.BROWSER) require('../../shared/main.styl')

export default class MainApp extends React.Component {
    render() {
        return (
            <div>
                <FluxComponent connectToStores={{
                    messages: store => ({
                        msgs: store.getMessages(),
                        count: store.getCount()
                    })
                }}>
                <Header />
            </FluxComponent>
                <RouteHandler/>
                </div>
        )
    }
}
