import React from 'react'
import classNames from 'classnames'

import { MONTHS_LENGTH } from '../../../weather/constants'
import SmartVisir from './SmartVisir'
import YearsStack from './YearsStack'

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

const Placeholder = () => (
    <div className="data-month data-month__placeholder"></div>
)
