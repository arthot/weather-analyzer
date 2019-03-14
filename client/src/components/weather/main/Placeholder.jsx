import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import classNames from 'classnames'

import FetchingIcon from '-!svg-react-loader?name=FetchingIcon!../../../images/sunny.svg';
import FetchingAppIcon from '-!svg-react-loader?name=FetchingIcon!../../../images/snowflake.svg';

require('../../../styles/weather/placeholder.scss')


const STAGES = {
    FETCHING: 'fetching_stage',
    SEARCH: 'searching_stage',
    PARSING: 'parsing_stage',
}

const INITTIAL_STAGE = STAGES.FETCHING;

export default class Main extends Component {
    state = { stage: INITTIAL_STAGE }

    componentDidMount() {
        this.searchTimer = setTimeout(() => {

            this.setState({ stage: STAGES.SEARCH });

            this.parsingTimer = setTimeout(() => {
                this.setState({ stage: STAGES.PARSING })
            }, 5000 * 1);

        }, 1000 * 1);
    }

    componentWillUnmount() {
        clearTimeout(this.searchTimer);
        clearTimeout(this.parsingTimer);
    }

    render() {
        const Icon = this.props.app ? FetchingAppIcon : FetchingIcon;
        return (
            <div className="data-placeholder-wrap">
                <div className="data-placeholder">
                    <Icon
                        className={classNames('data-placeholder-icon', {
                            'icon-rotate': this.state.stage !== INITTIAL_STAGE
                        })}
                    />
                    <span className="data-placeholder-text">{i18n.translate(this.state.stage)}...</span>
                </div>
            </div>
        )
    }
}
