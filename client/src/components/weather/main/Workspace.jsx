import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import range from 'lodash/range'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import ScrollDragger from './ScrollDragger'
import SmartVisir from './SmartVisir'

require('../../../styles/weather/workspace.scss')

const propTypes = {
    data: PropTypes.array.isRequired,
    month: PropTypes.number.isRequired,
}

export default class Main extends Component {
    state = {}

    static getDerivedStateFromProps(props, state) {
        if (state.month !== props.month)
            return {
                months: Main.getMonthsMap(props.month),
            }
        return null;
    }

    static getMonthsMap(month) {
        return Array(12).fill(0).map((el, i) => {
            const shift = month + i - 5;
            return shift < 1 ? shift + 12 :
                shift > 12 ? shift - 12 :
                    shift;
        })
    }

    render() {
        const { months } = this.state;
        if (months)
            return (
                <ScrollDragger className="workspace-wrap">
                    <div className="header">
                        {months.map(m => (
                            <div key={m} className={"header-month " + `header-month__${MONTHS_LENGTH[m]}`}>
                                <div className="header-month-title">{i18n.translate(`month_${m}`)}</div>
                                <div className="header-month-title">{i18n.translate(`month_${m}`)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="data">
                        <div className="border1">
                            {YEARS.map(y => (
                                <div key={y} className="border-year">{y}</div>
                            ))}
                        </div>
                        {months.map(m => (
                            <SmartVisir key={m} className={"data-month " + `header-month__${MONTHS_LENGTH[m]}`} threshold={0}>
                                {(visible) => visible ? YEARS.map(y => (
                                    <div key={y} className="data-year">
                                        {range(1, MONTHS_LENGTH[m] + 1).map(d => (
                                            <div key={d} className="data-day">{d}</div>
                                        ))}
                                    </div>
                                )) : <div className="data-month data-month__placeholder"></div>}
                            </SmartVisir>
                        ))}
                        <div className="border2">
                            {YEARS.map(y => (
                                <div key={y} className="border-year">{y}</div>
                            ))}
                        </div>
                    </div>
                    <div className="footer">
                        {months.map(m => (
                            <div key={m} className={"footer-month " + `header-month__${MONTHS_LENGTH[m]}`}>
                                {range(1, MONTHS_LENGTH[m] + 1).map(d => (
                                    <div key={`${m}_${d}`} className="footer-month-day" >{d}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                </ScrollDragger>
            )
        else
            return null;
    }
}

const MONTHS_LENGTH = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const YEARS = range(new Date().getFullYear() - 4, new Date().getFullYear() + 1);

Main.propTypes = propTypes;

