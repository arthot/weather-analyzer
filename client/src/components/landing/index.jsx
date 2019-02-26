import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import ParallaxBackground from './ParallaxBackground'
import LocaleSelector from './Locales'
import i18n from 'es2015-i18n-tag'
import { connect } from 'react-redux'

import { localize } from '../../locale/localize'
import * as Actions from '../../search/actions'

require('../../styles/landing.scss')
require('famfamfam-flags/dist/sprite/famfamfam-flags.css')

const YEAR = new Date().getFullYear();

@localize
@withRouter
@connect(
    (state, own) => own,
    (dispatch) => ({
        clearAll: () => {
            dispatch({
                type: Actions.SEARCH_CLEAR_ALL
            });
        },
    })
)
export default class Landing extends PureComponent {
    componentDidMount() {
        this.props.clearAll();
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing-wrap clearfix">
                    <div className="landing">
                        <ParallaxBackground />
                    </div>
                    <footer>
                        {YEAR} <a target="_blank" href="https://github.com/arthot">{i18n`Art Khatsianovich`}</a>
                        <LocaleSelector />
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
