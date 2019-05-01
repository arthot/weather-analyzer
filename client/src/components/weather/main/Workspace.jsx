import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import debounce from 'debounce'

import { SEARCH_MONTH_SELECT } from '../../../search/actions'

import ScrollDragger from './ScrollDragger'
import MonthTracker from './MonthTracker'
import YearsStrip from './YearsBorder'
import MonthsStrip from './MonthsStrip'
import DaysStrip from './DaysStrip'
import Month from './Month'

require('../../../styles/weather/workspace/index.scss')

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
    state = {
        month: -1,
        months: null,
        changeByScroll: false
    };
    monthTracker = React.createRef();
    resetChangeByScroll = debounce(() => this.setState({ changeByScroll: false }), 200);

    static getDerivedStateFromProps(props, state) {
        if (!state.repositionScroll && !state.changeByScroll && state.month !== props.month)
            return Workspace.reshapeIfMonthChanged(props.month, state.months);

        const idx = state.months.indexOf(props.month);
        if (state.changeByScroll && state.month !== props.month && (idx < 2 || idx > 9)) {
            return Workspace.reshapeIfTooCloseToBorders(props.month);
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

    static reshapeIfTooCloseToBorders(month) {
        return {
            month: month,
            months: Workspace.getMonthsMap(month),
            changeByScroll: false,
            movingToMonth: false,
            repositionScroll: true,
        }
    }

    static reshapeIfMonthChanged(month, monthsMap) {
        return {
            month: month,
            months: (monthsMap && monthsMap.indexOf(month) > 1 && monthsMap.indexOf(month) < 10) ?
                monthsMap :
                Workspace.getMonthsMap(month),
            changeByScroll: false,
            movingToMonth: true,
        }
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
            this.resetChangeByScroll();
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

    render() {
        const { months } = this.state;

        if (months)
            return (
                <ScrollDragger className="workspace-wrap">
                    <MonthsStrip months={months} />
                    <div className="workspace-data">
                        <YearsStrip left />
                        <MonthTracker onMonthChanged={this.onMonthChanged} ref={this.monthTracker}>
                            {months.map(m => (
                                <Month key={m} month={m} />
                            ))}
                        </MonthTracker>
                        <YearsStrip right />
                    </div>
                    <DaysStrip months={months} />
                </ScrollDragger>
            )
        else
            return null;
    }
}

Workspace.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
