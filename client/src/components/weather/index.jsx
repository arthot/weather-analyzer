import React, { PureComponent } from 'react'
import classNames from 'classnames'

require('../../styles/weather/index.scss')


export default class Weather extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <header className={classNames('app-header', { 'app-header__to-weather': this.props.toWeatherTransition })}>
                </header>
                <main>
                    table
                </main>
            </React.Fragment>
        )
    }
}
