import React, { PureComponent } from 'react'
import { BrowserRouter, match as Match, Route, Switch } from 'react-router-dom'
import { Landing } from 'src/components/landing/Index'
import { Weather } from 'src/components/weather/Index'

export class Layout extends PureComponent<ILayoutProps> {
    render() {
        const { match } = this.props;
        return (
            <div>
                Layout2
                <Switch>
                    <Route path={`${match.url}/:id(\\d+)`} component={Weather} />
                    <Route path={`${match.url}/`} exact={true} component={Landing} />
                </Switch>
            </div>
        )
    }
}

interface ILayoutProps {
    match: Match<{}>
}
