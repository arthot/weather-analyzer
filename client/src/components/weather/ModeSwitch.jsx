import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import * as ACTIONS from '../../weather/actions'
import { MODES } from '../../weather/constants'

import CloudIcon from '../../images/switch/cloud.svg';
import TempIcon from '../../images/switch/temp.svg';

require('../../styles/weather/switch.scss')

const propTypes = {
    mode: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    mode: state.weather.mode,
})

const mapDispatchToProps = (dispatch) => ({
    onChange: mode => dispatch({
        type: ACTIONS.WEATHER_MODE_CHANGED,
        payload: { mode }
    }),
})

class ModeSwitch extends PureComponent {
    onChange = (ev) => {
        this.props.onChange(ev.target.checked ? MODES.PRECIPITATION : MODES.TEMPERATURE);
    }

    render() {
        return (
            <label className="app-header-switch cl-switch cl-switch-large">
                <input type="checkbox" onChange={this.onChange} checked={this.props.mode === MODES.PRECIPITATION} />
                <div className="switcher">
                    <div className="toggle">
                        <img className="toggle-icon" src={this.props.mode === MODES.PRECIPITATION ? CloudIcon : TempIcon} />
                    </div>
                </div>
            </label>
        )
    }
}

ModeSwitch.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch)
