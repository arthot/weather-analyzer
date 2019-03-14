import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import classNames from 'classnames'

import FetchingIcon from '-!svg-react-loader?name=FetchingIcon!../../../images/sunny.svg';
import FetchingAppIcon from '-!svg-react-loader?name=FetchingIcon!../../../images/snowflake.svg';

require('../../../styles/weather/placeholder.scss')


const STAGES = {
    FETCHING: 'fetching_stage',
    SEARCHING: 'searching_stage',
    PARSING: 'parsing_stage',
}

const INITIAL_STAGE = STAGES.FETCHING;

const STAGES_DELAYS = {
    [INITIAL_STAGE]: 1,
    [STAGES.SEARCHING]: 5,
    [STAGES.PARSING]: 0,
}

export default class Placeholder extends Component {
    state = { stage: INITIAL_STAGE }

    componentDidMount() {
        this.searchTimer = setTimeout(() => {
            this.setState({ stage: STAGES.SEARCHING });

            this.parsingTimer = setTimeout(() => {
                this.setState({ stage: STAGES.PARSING })
            }, 1000 * STAGES_DELAYS[this.state.stage]);

        }, 1000 * STAGES_DELAYS[this.state.stage]);
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
                            'icon-rotate': this.state.stage !== INITIAL_STAGE
                        })}
                    />
                    <span className="data-placeholder-text">{i18n.translate(this.state.stage)}...</span>
                </div>
            </div>
        )
    }
}
