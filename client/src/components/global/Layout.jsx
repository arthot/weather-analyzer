import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Landing } from '../landing/Index'
import Search from '../search/Index'
import { Weather } from '../weather/Index'
import { LANGUAGE_CHANGED } from '../../lang/actions'

class LayoutComponent extends PureComponent {
    render() {
        const { match } = this.props;
        return (
            <div>
                <Search />
                <Switch>
                    <Route path={`${match.url}/:id(\\d+)`} component={Weather} />
                    <Route path={`${match.url}/`} exact={true} component={Landing} />
                </Switch>
            </div>
        )
    }
}

export const Layout = connect(
    (state, own) => own,
    (dispatch) => ({
        setLanguage: (lang) => dispatch({
            type: LANGUAGE_CHANGED,
            payload: { lang }
        })
    })
)(LayoutComponent)
