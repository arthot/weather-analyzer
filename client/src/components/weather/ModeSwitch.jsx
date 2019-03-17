import React, { Component } from 'react'
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

class ModeSwitch extends Component {
    state = { mode: null, byClick: false };

    static getDerivedStateFromProps(props, state) {
        if (props.mode !== state.mode && !state.byClick)
            return { mode: props.mode, byClick: false };

        return null;
    }

    onChange = (ev) => {
        const mode = ev.target.checked ? MODES.PRECIPITATION : MODES.TEMPERATURE;
        this.setState({ mode, byClick: true }, () => {
            this.delayedUpdate = setTimeout(() => {
                this.props.onChange(mode);
                this.setState({ byClick: false });
            }, 200);
        });
    }

    componentWillUnmount() {
        clearTimeout(this.delayedUpdate);
    }

    render() {
        const { mode } = this.state;
        return (
            <label className="app-header-switch cl-switch cl-switch-large" title={i18n.translate(`Mode ${mode} description`)}>
                <input type="checkbox" onChange={this.onChange} checked={mode === MODES.PRECIPITATION} />
                <div className="switcher">
                    <div className="toggle">
                        <img className="toggle-icon" src={mode === MODES.PRECIPITATION ? CloudIcon : TempIcon} />
                    </div>
                </div>
            </label>
        )
    }
}

ModeSwitch.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch)
