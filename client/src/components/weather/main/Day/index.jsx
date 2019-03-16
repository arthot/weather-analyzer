import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { MODES } from '../../../../weather/constants'
import { MIN, MAX, getTemperatureColor, getPrecipitationColor } from './colors'

import getIconSrc from './icon'

const propTypes = {
    mode: PropTypes.string.isRequired,
    data: PropTypes.object,
}

export default class Day extends PureComponent {
    render() {
        const { data } = this.props;
        const iconSrc = getIconSrc(data);

        if (data) {
            const percent = (Math.max(Math.min(MAX, data.temperature), MIN) - MIN) / (MAX - MIN) * 100;
            const gradient = this.props.mode === MODES.TEMPERATURE ?
                getTemperatureColor(percent) :
                getPrecipitationColor(percent, data.cloudiness, data.fallout);

            return (
                <div className="data-day" style={{ backgroundImage: gradient }}>
                    <img src={iconSrc} className="data-day-icon" />
                    <span className="data-day-temperature">{data.temperature}</span>
                </div>
            )
        } else {
            return (
                <div className="data-day data-day__empty">
                    <img src={iconSrc} className="data-day-icon-empty" />
                    <span className="data-day-temperature">&nbsp;</span>
                </div>
            )
        }
    }
}

Day.propTypes = propTypes;
