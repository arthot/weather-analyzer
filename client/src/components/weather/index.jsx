import React, { PureComponent } from 'react'
import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import { Link } from 'react-router-dom'

require('../../styles/weather/index.scss')


export default class Weather extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <header
                    className={classNames('app-header', {
                        'app-header__to-weather': this.props.toWeatherTransition
                    })}
                >
                    <Link to="/" className="app-header-title">{i18n`Weather Archive`}</Link>
                </header>
                <main>
                    table
                </main>
            </React.Fragment>
        )
    }
}
