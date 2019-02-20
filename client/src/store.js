import { applyMiddleware, compose, createStore } from 'redux'
import saga from 'redux-saga'
import { store as rootReducer } from './reducers'
import rootSaga from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = saga();
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        ),
    ));

sagaMiddleware.run(rootSaga);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
