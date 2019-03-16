import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import range from 'lodash/range'
import { connect } from 'react-redux'

import Day from './Day'
import Placeholder from './Placeholder'
import { MONTHS_LENGTH, YEARS } from '../../../weather/constants'
import { WEATHER_MONTH_VISIBLE } from '../../../weather/actions'

const propTypes = {
    mode: PropTypes.string.isRequired,
}

const mapStateToProps = (state, own) => ({
    data: state.weather.data[own.month - 1],
    mode: state.weather.mode,
})

const mapDispatchToProps = (dispatch) => ({
    onMonthShown: (month) => {
        dispatch({
            type: WEATHER_MONTH_VISIBLE,
            payload: { month }
        });
    },
})

class YearsStack extends PureComponent {
    componentDidMount() {
        this.props.onMonthShown(this.props.month);
    }

    render() {
        const { month, data, mode } = this.props;
        if (data && !data.loading && data.weather) {
            return (
                YEARS.map(y => (
                    <div key={y} className="data-year">
                        {range(1, MONTHS_LENGTH[month] + 1).map(d => (
                            <Day
                                key={d}
                                day={d}
                                mode={mode}
                                data={data.weather[`${y}-${month.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`]}
                            />
                        ))}
                    </div>
                ))
            )
        } else {
            return (
                <Placeholder />
            )
        }
    }
}

YearsStack.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(YearsStack)
