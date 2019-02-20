import React, { PureComponent } from 'react'
import { Parallax } from '../global/Paralax'
import LocaleSelector from './Locales'
import i18n from 'es2015-i18n-tag'

require('../../styles/landing.scss')
import { localize } from '../../locale/localize'
require('famfamfam-flags/dist/sprite/famfamfam-flags.css')

const YEAR = new Date().getFullYear();

@localize
export class Landing extends PureComponent {
    render() {
        return (
            <div className="landing-wrap clearfix">
                <div className="landing">
                    <Parallax>
                        <div data-depth="0.05" className="paralax-layer paralax-layer-4"></div>
                        <div data-depth="0.15" className="paralax-layer paralax-layer-3"></div>
                        <div data-depth="0.3" className="paralax-layer paralax-layer-2"></div>
                        <div data-depth="0.5" className="paralax-layer paralax-layer-1"></div>
                    </Parallax>
                </div>
                <footer>
                    <LocaleSelector />
                    {YEAR}&nbsp;
                    <a target="_blank" href="https://github.com/arthot">{i18n`Art Khatsianovich`}</a>
                </footer>
            </div>
        )
    }
}
