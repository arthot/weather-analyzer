import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import range from 'lodash/range'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import ScrollDragger from './ScrollDragger'

require('../../../styles/weather/workspace.scss')

const propTypes = {
    data: PropTypes.array.isRequired,
    month: PropTypes.number.isRequired,
}

export default class Main extends Component {
    getMonthsMap(month) {
        return Array(12).fill(0).map((el, i) => {
            const shift = month + i - 5;
            return shift < 0 ? shift + 12 :
                shift > 12 ? shift - 12 :
                    shift;
        })
    }

    render() {
        const months = this.getMonthsMap(this.props.month);
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
                        bor1
                    </div>
                    {months.map(m => (
                        <div key={m} className={"data-month " + `header-month__${MONTHS_LENGTH[m]}`}>{i18n.translate(`month_${m}`)}</div>
                    ))}
                    <div className="border2">
                        bor2
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

Main.propTypes = propTypes;

