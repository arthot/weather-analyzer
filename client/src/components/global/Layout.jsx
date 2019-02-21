import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router'
import Landing from '../landing'
import Weather from '../weather'

export class Layout extends PureComponent {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/:id(\\d+)'} component={Weather} />
                    <Route path={'/'} exact={true} component={Landing} />
                </Switch>
            </div>
        )
    }
}
