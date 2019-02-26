import React, { Component } from 'react'
import classNames from 'classnames'
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'

import Landing from '../landing'
import Weather from '../weather'
import Search from '../search'

@withRouter
export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { isRoot: Layout.isRoot(props.location.pathname) };
    }

    static isRoot(pathname) {
        return pathname === '/';
    }

    static getDerivedStateFromProps(props, state) {
        const isRoot = Layout.isRoot(props.location.pathname);
        if (state.isRoot !== isRoot)
            return {
                isRoot,
                toLanding: isRoot && !state.isRoot,
                toHeader: !isRoot && state.isRoot,
            }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <Search className={classNames({
                    'search-container-wrap__landing': !this.state.toLanding && this.state.isRoot,
                    'search-container-wrap__header': !this.state.toHeader && !this.state.isRoot,
                    'search-container-wrap__to_landing': this.state.toLanding,
                    'search-container-wrap__to_header': this.state.toHeader,
                })} />
                <Switch>
                    <Route path={'/:lang/:id(\\d+)'} component={Weather} />
                    <Route path={'/'} exact={true} component={Landing} />
                </Switch>
            </React.Fragment>
        )
    }
}
