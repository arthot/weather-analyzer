import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Placeholder from './Placeholder'
import Workspace from './Workspace'

const propTypes = {
    data: PropTypes.array.isRequired,
}

export default class Main extends PureComponent {
    render() {
        const isEmpty = this.props.data.every(i => !i || !i.data);

        return (
            <main className="app-main">
                {!isEmpty && (
                    <div className="app-main-placeholder">
                        <Placeholder />
                    </div>
                )}
                {isEmpty && (
                    <Workspace data={this.props.data} />
                )}
            </main>
        )
    }
}

Main.propTypes = propTypes;
