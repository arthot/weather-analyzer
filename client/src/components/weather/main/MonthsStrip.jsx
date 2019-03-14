import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'
import classNames from 'classnames'

import { MONTHS_LENGTH } from '../../../weather/constants'


export default class MonthsStrip extends PureComponent {
    render() {
        const { months } = this.props;

        return (
            <div className="workspace-border-strip workspace-border-strip__header">
                {months.map(m => (
                    <div key={m} className={classNames('strip-month-item', `month-length__${MONTHS_LENGTH[m]}`)}>
                        <div className="header-month-title">{i18n.translate(`month_${m}`)}</div>
                        <div className="header-month-title">{i18n.translate(`month_${m}`)}</div>
                    </div>
                ))}
            </div>
        )
    }
}
