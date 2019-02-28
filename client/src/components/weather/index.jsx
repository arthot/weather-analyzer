import React, { PureComponent } from 'react'
import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as ACTIONS from '../../weather/actions'

require('../../styles/weather/index.scss')

const mapStateToProps = (state, own) => ({
    locale: own.match.params.lang,
    cityId: own.match.params.id,
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
                <header
                    className={classNames('app-header', {
                        'app-header__to-weather': this.props.toWeatherTransition
                    })}
                >
                    <Link to="/" className="app-header-title">{i18n`Weather Archive`}</Link>
                </header>
                <main>
                    table
                </main>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
