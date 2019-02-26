import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'babel-polyfill'

import Root from './components/global/Root'
import Provider from './Provider'

ReactDOM.render(
    <Router>
        <Provider>
            <Root />
        </Provider>
    </Router>,
    document.getElementById('app')
)
