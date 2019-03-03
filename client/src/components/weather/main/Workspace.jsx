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
        if (!state.repositionScroll && !state.changeByScroll && state.month !== props.month)
            return {
                month: props.month,
                months: (state.months && state.months.indexOf(props.month) > 1 && state.months.indexOf(props.month) < 10) ?
                    state.months :
                    Workspace.getMonthsMap(props.month),
                changeByScroll: false,
                movingToMonth: true,
            }

        if (state.changeByScroll && state.month !== props.month &&
            (state.months.indexOf(props.month) < 2 || state.months.indexOf(props.month) > 9)) {
            return {
                month: props.month,
                months: Workspace.getMonthsMap(props.month),
                changeByScroll: false,
                movingToMonth: false,
                repositionScroll: true,
            }
        }

        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.state.repositionScroll) {
            return {
                month: prevState.month,
                position: this.monthTracker.current.getMonthPosition(prevState.month) - document.documentElement.scrollLeft,
            }
        }
        return null;
    }

    componentDidMount() {
        if (this.state.movingToMonth) {
            this.setState({ movingToMonth: false }, () => {
                this.scrollToMonth(this.state.month);
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.movingToMonth) {
            this.scrollToMonth(this.state.month);
            this.setState({ movingToMonth: false });
        } else if (this.state.repositionScroll) {
            this.setState({ repositionScroll: false }, () => {
                this.repositionScroll(this.state.month, snapshot.position, snapshot.month);
            });
        } else if (this.state.changeByScroll)
            this.setState({ changeByScroll: false });
    }

    scrollToMonth(month) {
        const x = this.monthTracker.current.getMonthPosition(month);
        document.documentElement.scrollLeft = x - 50;
    }

    repositionScroll(month, oldPosition, oldMonth) {
        const x = this.monthTracker.current.getMonthPosition(month);
        document.documentElement.scrollLeft = x + oldPosition + 150 * (month - oldMonth);
    }

    onMonthChanged = (month) => {
        if (month !== this.props.month) {
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
                <ScrollDragger className="workspace-wrap" id="workspace">
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

