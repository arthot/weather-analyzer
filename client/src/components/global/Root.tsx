import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'src/components/global/Layout'

export class Root extends PureComponent {
    render() {
        return (
            <Route path="/:lang([a-z]{2})" component={Layout} />
        )
    }
}
