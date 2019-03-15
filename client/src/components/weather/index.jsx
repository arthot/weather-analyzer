import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import * as ACTIONS from '../../weather/actions'
import Header from './Header'
import Main from './main'

require('../../styles/weather/index.scss')

const mapStateToProps = (state, own) => ({
    locale: own.match.params.lang,
    cityId: (parseInt(own.match.params.id) || null),
    data: state.weather.data,
    month: state.search.month,
})

const mapDispatchToProps = (dispatch) => ({
    onLoad: (locale, cityId) => dispatch({
        type: ACTIONS.WEATHER_PAGE_LOADED,
        payload: { locale, cityId }
    }),
})

class Weather extends PureComponent {
    componentDidMount() {
        this.props.onLoad(this.props.locale, this.props.cityId);
    }

    render() {
        return (
            <React.Fragment>
                <Header toWeatherTransitio={this.props.toWeatherTransition} />
                <Main data={this.props.data} month={this.props.month} />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
