import React from 'react'
import { Link } from 'react-router'

import Home from '../home/home'
import About from '../about/about'

import './header.styl'

export default class Header extends React.Component {
    render() {
        return (
            <header className="ns-appHeader">
                <h1>Welcome to React Ecosystem Aurora</h1>
                <h2>A (attempting to be, one of many possible) ready-to-run, best-practices React App ecosystem</h2>
                <p className="notice">Work in Progress!</p>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About Aurora</Link></li>
                    <li><a href="https://github.com/firegoby/react-ecosystem-aurora" target="_blank">Github Repo</a></li>
                </ul>
            </header>
        )
    }
}
