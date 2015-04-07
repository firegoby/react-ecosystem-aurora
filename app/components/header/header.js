import React from 'react'
import { Link } from 'react-router'

import './header.styl'

export default class Header extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(ev) {
        const elem = React.findDOMNode(this.refs.message)
        const newMsg = elem.value
        elem.value = ''
        elem.focus()
        this.props.flux.getActions('messages').newMessage(newMsg)
    }

    render() {
        var msgs = this.props.msgs.map( m => <p key={m.id}>{m.content}</p> )
        return (
            <header className="ns-appHeader">
                <h1>Welcome to React Ecosystem Aurora</h1>
                <h2>A (attempting to be, one of many possible) ready-to-run, best-practices React App ecosystem</h2>
                <p className="notice">Work in Progress!</p>
                {msgs}
                <input ref="message" type="text"/>
                <button onClick={this.handleClick}>Add</button>
                <p>Count: {this.props.count}</p>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About Aurora</Link></li>
                    <li><a href="https://github.com/firegoby/react-ecosystem-aurora" target="_blank">Github Repo</a></li>
                </ul>
            </header>
        )
    }
}
