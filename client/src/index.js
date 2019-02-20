import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'babel-polyfill'

import Root from './components/global/Root'
import store from './store'
import i18n from './locale/i18n'

i18n(store.getState().locale)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);
