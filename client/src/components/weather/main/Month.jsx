import React from 'react'
import classNames from 'classnames'
import range from 'lodash/range'

import { MONTHS_LENGTH, YEARS } from '../../../weather/constants'
import SmartVisir from './SmartVisir'
import Day from './Day'

export default React.forwardRef(({ month, onItersection }, ref) => (
    <SmartVisir
        month={month}
        key={month}
        onItersection={onItersection}
        ref={ref}
        className={classNames('data-month', `month-length__${MONTHS_LENGTH[month]}`)}
        threshold={0}
    >
        {(visible) => visible ? <YearsStack month={month} /> : <Placeholder />}
    </SmartVisir>
))

const YearsStack = ({ month }) => (
    YEARS.map(y => (
        <div key={y} className="data-year">
            {range(1, MONTHS_LENGTH[month] + 1).map(d => (
                <Day key={d} day={d} />
            ))}
        </div>
    ))
)

const Placeholder = () => (
    <div className="data-month data-month__placeholder"></div>
)
