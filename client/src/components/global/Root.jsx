import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Layout } from './Layout'

require('../../styles/common.scss')

@hot
export default class Root extends Component {
    render() {
        return (
            <Route path="/" component={Layout} />
        )
    }
}
