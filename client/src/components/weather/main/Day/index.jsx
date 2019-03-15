import React, { PureComponent } from 'react'
import { MIN, MAX, getTemperatureColor } from './colors'

export default class Day extends PureComponent {
    render() {
        const { day, data } = this.props;

        if (data) {
            const percent = (Math.max(Math.min(MAX, data.temperature), MIN) - MIN) / (MAX - MIN) * 100;
            const gradient = getTemperatureColor(percent);

            return (
                <div className="data-day" style={{ backgroundImage: gradient }}>
                    <span className="data-day-temperature">{data.temperature}</span>
                </div>
            )
        } else {
            return (
                <div className="data-day">
                </div>
            )
        }
    }
}

