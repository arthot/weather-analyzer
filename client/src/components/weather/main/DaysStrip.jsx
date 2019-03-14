import React, { PureComponent } from 'react'
import range from 'lodash/range'
import classNames from 'classnames'

import { MONTHS_LENGTH } from '../../../weather/constants'

export default class DaysStrip extends PureComponent {
    render() {
        const { months } = this.props;

        return (
            <div className="workspace-border-strip workspace-border-strip__footer">
                {months.map(m => (
                    <div key={m} className={classNames('strip-month-item', `month-length__${MONTHS_LENGTH[m]}`)}>
                        {range(1, MONTHS_LENGTH[m] + 1).map(d => (
                            <div key={d} className="footer-month-day" >{d}</div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}
