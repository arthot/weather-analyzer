import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'

export default class Title extends PureComponent {
    render() {
        return (
            <div className="landing-title">
                <span className="landing-title-text">
                    <svg viewBox="0 0 600 600">
                        <path id="curve" d="m8.19998,149.58132c6.64631,-1.82423 108.83333,-28.94847 296.75775,-28.58961c184.93358,0.35887 283.79745,27.00462 290.94223,29.00829" />
                        <text>
                            <textPath xmlSpace='preserve' href="#curve">
                                {i18n`Weather Archive Title`}
                            </textPath>
                        </text>
                    </svg>
                </span>
            </div >
        )
    }
}
