import classNames from 'classnames'
import React, { PureComponent } from 'react'
import { Parallax } from 'src/components/global/Paralax'

require('src/styles/landing.less')
require('famfamfam-flags/dist/sprite/famfamfam-flags.css')

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
                    <div className="locale-selector">
                        {[{ lang: 'en', flag: 'gb' }, { lang: 'ru', flag: 'ru' }].map(l => (
                            <a key={l.lang} href={`/${l.lang}`} title={l.lang} className="locale-selector-item">
                                <div className={classNames({
                                    'famfamfam-flags': true,
                                    [l.flag]: true,
                                })}></div>
                            </a>
                        ))}
                    </div>
                    {new Date().getFullYear()}&nbsp;
                    <a target="_blank" href="https://github.com/arthot">arthot</a>
                </footer>
            </div>
        )
    }
}
