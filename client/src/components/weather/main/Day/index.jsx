import React, { PureComponent } from 'react'

export default class Day extends PureComponent {
    render() {
        const { day } = this.props;
        return (
            <div className="data-day">{day}</div>
        )
    }
}

