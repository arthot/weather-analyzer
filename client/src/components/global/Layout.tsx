import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { match as Match, Route, Switch } from 'react-router'
import { Landing } from 'src/components/landing/Index'
import Search from 'src/components/search/Index'
import { Weather } from 'src/components/weather/Index'
import { LANGUAGE_CHANGED } from 'src/lang/actions'

class LayoutComponent extends PureComponent<ILayoutProps> {
    componentWillMount() {
        this.props.setLanguage(this.props.match.params.lang);
    }
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

export const Layout = connect<{}, ILayoutFunc, {}, {}>(
    (state, own) => own,
    (dispatch) => ({
        setLanguage: (lang) => dispatch({
            type: LANGUAGE_CHANGED,
            payload: { lang }
        })
    })
)(LayoutComponent)

interface ILayoutParams {
    match: Match<{ lang: string }>
}

interface ILayoutFunc {
    setLanguage(lang: string);
}

type ILayoutProps = ILayoutParams & ILayoutFunc;
