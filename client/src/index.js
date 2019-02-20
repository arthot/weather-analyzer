import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import 'babel-polyfill';

import Root from './components/global/Root';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('app')
);
