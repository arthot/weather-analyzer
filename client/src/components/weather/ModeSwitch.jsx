import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CloudIcon from '../../images/switch/cloud.svg';
import TempIcon from '../../images/switch/temp.svg';

require('../../styles/weather/switch.scss')

const propTypes = {

}

export default class ModeSwitch extends PureComponent {
    render() {
        return (
            <label className="app-header-switch cl-switch cl-switch-large">
                <input type="checkbox" />
                <div className="switcher">
                    <div className="toggle">
                        <img className="toggle-icon" src={TempIcon} />
                    </div>
                </div>
            </label>
        )
    }
}

ModeSwitch.propTypes = propTypes;

