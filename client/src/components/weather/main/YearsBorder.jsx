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
                {YEARS.map(y => {
                    const parts = [y.toString().slice(0, 2), y.toString().slice(2, 4)];
                    return (
                        <div key={y} className="side-year-item">
                            <span className="side-year-item-part__hide-xs">{parts[0]}</span>
                            <span>{parts[1]}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
