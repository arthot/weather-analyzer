import React, { PureComponent } from 'react'

export default class Day extends PureComponent {
    render() {
        const { day, data } = this.props;
        console.log(data);
        
        return (
            <div className="data-day">{day}</div>
        )
    }
}

