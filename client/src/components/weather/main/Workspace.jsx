import React, { Component } from 'react'
import i18n from 'es2015-i18n-tag'
import classNames from 'classnames'
import PropTypes from 'prop-types'

require('../../../styles/weather/workspace.scss')

const propTypes = {
    data: PropTypes.array.isRequired,
}

export default class Main extends Component {
    render() {
        return (
            <div className="workspace-wrap">
                <div className="header">
                    header
                    </div>
                <div className="data">
                    <div className="border1">
                        bor1
                    </div>
                    {Array.fill(Array(50), 'date').join(' ')}
                    <div className="border2">
                        bor2
                    </div>
                </div>
                <div className="footer">
                    footer
                </div>
                <div className="stats">
                    stat
                </div>
            </div>
        )
    }
}

Main.propTypes = propTypes;

