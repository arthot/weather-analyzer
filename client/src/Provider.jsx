import React from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import i18n from './locale/i18n'

import configureStore from './store'

class ProviderWithRouter extends React.Component {
    constructor(props) {
        super(props)

        this.store = configureStore({
            router: props.history,
        })

        i18n(this.store.locale);
    }

    render() {
        return (
            <Provider store={this.store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default withRouter(ProviderWithRouter)
