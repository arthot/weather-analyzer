import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import range from 'lodash/range'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SEARCH_MONTH_SELECT } from '../../../search/actions'
import { MONTHS_LENGTH, YEARS } from '../../../weather/constants'
import ScrollDragger from './ScrollDragger'
import SmartVisir from './SmartVisir'
import MonthTracker from './MonthTracker'

require('../../../styles/weather/workspace.scss')

const propTypes = {
    data: PropTypes.array.isRequired,
    month: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.weather.data,
    month: state.search.month,
})

const mapDispatchToProps = (dispatch) => ({
    onMonthChanged: (month) => {
        dispatch({
            type: SEARCH_MONTH_SELECT,
            payload: { month }
        });
    },
})

class Workspace extends Component {
    state = { month: -1, months: null, changeByScroll: false };
    monthTracker = React.createRef();

    static getDerivedStateFromProps(props, state) {
        if (!state.changeByScroll && state.month !== props.month)
            return {
                month: props.month,
                months: (state.months && state.months.indexOf(props.month) > 1 && state.months.indexOf(props.month) < 11) ?
                    state.months :
                    Workspace.getMonthsMap(props.month),
                changeByScroll: false,
                movingToMonth: true,
            }

        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidMount() {
        if (this.state.movingToMonth) {
            this.setState({ movingToMonth: false }, () => {
                this.scrollToMonth(this.state.month);
            });
        }
    }

    componentDidUpdate(snapshot) {
        if (this.state.movingToMonth) {
            this.setState({ movingToMonth: false }, () => {
                this.scrollToMonth(this.state.month);
            });
        } else if (Number.isFinite(snapshot.position)) {
            this.repositionScroll(this.state.month, snapshot.position);
        } else if (this.state.changeByScroll)
            this.setState({ changeByScroll: false });
    }

    scrollToMonth(month) {
        const x = this.monthTracker.current.getMonthPosition(month);
        console.log('scroll to ' + month + '; position ' + x + '; array ' + this.state.months.join());
        document.documentElement.scrollLeft = x - 50;
    }

    repositionScroll(month, oldPosition) {

    }

    onMonthChanged = (month) => {
        if (month !== this.props.month) {
            console.log('month changed to ' + month + '; was at ' + this.state.month);
            this.setState({ month, changeByScroll: true }, () => {
                this.props.onMonthChanged(month);
            });
        }
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
                        <MonthTracker onMonthChanged={this.onMonthChanged} ref={this.monthTracker}>
                            {months.map(m => (
                                <SmartVisir
                                    month={m}
                                    key={m}
                                    className={"data-month " + `header-month__${MONTHS_LENGTH[m]}`}
                                    threshold={0}
                                >
                                    {(visible) => visible ? YEARS.map(y => (
                                        <div key={y} className="data-year">
                                            {range(1, MONTHS_LENGTH[m] + 1).map(d => (
                                                <div key={d} className="data-day">{d}</div>
                                            ))}
                                        </div>
                                    )) : <div className="data-month data-month__placeholder"></div>}
                                </SmartVisir>
                            ))}
                        </MonthTracker>
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


Workspace.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)

