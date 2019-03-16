import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import PropTypes from 'prop-types'

import ModeSwitch from './ModeSwitch'


require('../../styles/weather/header.scss')

const propTypes = {
    toWeatherTransition: PropTypes.bool,
}

export default class Header extends PureComponent {
    render() {
        return (
            <header
                className={classNames('app-header', {
                    'app-header__to-weather': this.props.toWeatherTransition
                })}
            >
                <Link to="/" className="app-header-title">{i18n`Weather Archive`}</Link>
                <ModeSwitch />
            </header>
        )
    }
}

Header.propTypes = propTypes;
