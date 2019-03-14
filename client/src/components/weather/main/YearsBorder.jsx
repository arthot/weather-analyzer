import React, { PureComponent } from 'react'
import classNames from 'classnames'

import { YEARS } from '../../../weather/constants'

export default class YearsStrip extends PureComponent {
    render() {
        const { left, right } = this.props;

        return (
            <div className={classNames('side', {
                'side__left': left,
                'side__right': right
            })}>
                {YEARS.map(y => (
                    <div key={y} className="side-year-item">{y}</div>
                ))}
            </div>
        )
    }
}
