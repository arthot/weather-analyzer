import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import i18n from 'es2015-i18n-tag'

import { MODES } from '../../../../weather/constants'
import { MIN, MAX, getTemperatureColor, getPrecipitationColor } from './colors'

import getIconSrc from './icon'

const propTypes = {
    mode: PropTypes.string.isRequired,
    data: PropTypes.object,
}

export default class Day extends PureComponent {
    generateDescription(data) {
        return `
${i18n`Cloudiness`} ${data.cloudiness * 100}%
${i18n`Temperature`} ${data.temperature}°
${i18n`Fallout`} ${i18n.translate(data.fallout)}
`
    }
    render() {
        const { data, mode } = this.props;
        const iconSrc = getIconSrc(mode, data);

        if (data) {
            const percent = (Math.max(Math.min(MAX, data.temperature), MIN) - MIN) / (MAX - MIN) * 100;
            const gradient = mode === MODES.TEMPERATURE ?
                getTemperatureColor(percent) :
                getPrecipitationColor(percent, data.cloudiness, data.fallout);

            return (
                <div className="data-day" style={{ backgroundImage: gradient }} title={this.generateDescription(data)}>
                    <img src={iconSrc} className="data-day-icon" />
                    <span className="data-day-temperature">{data.temperature}°</span>
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
