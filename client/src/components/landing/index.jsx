import React, { PureComponent } from 'react'
import ParallaxBackground from './ParallaxBackground'
import LocaleSelector from './Locales'
import i18n from 'es2015-i18n-tag'

import { localize } from '../../locale/localize'

require('../../styles/landing.scss')
require('famfamfam-flags/dist/sprite/famfamfam-flags.css')

const YEAR = new Date().getFullYear();

@localize
export default class Landing extends PureComponent {
    render() {
        return (
            <div className="landing-wrap clearfix">
                <div className="landing">
                    <ParallaxBackground />
                </div>
                <footer>
                    {YEAR} <a target="_blank" href="https://github.com/arthot">{i18n`Art Khatsianovich`}</a>
                    <LocaleSelector />
                </footer>
            </div>
        )
    }
}
