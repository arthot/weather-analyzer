import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Placeholder from './Placeholder'
import Workspace from './Workspace'

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.array }))
}

export default class Main extends PureComponent {
    render() {
        const isEmpty = this.props.data.every(i => !i || !i.weather);

        return (
            <main className="app-main">
                {isEmpty && (
                    <div className="app-main-placeholder">
                        <Placeholder app />
                    </div>
                )}
                {!isEmpty && (
                    <Workspace />
                )}
            </main>
        )
    }
}

Main.propTypes = propTypes;
