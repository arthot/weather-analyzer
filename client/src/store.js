import { applyMiddleware, compose, createStore } from 'redux'
import saga from 'redux-saga'
import { store as rootReducer } from './reducers'
import rootSaga from './saga'
import i18 from './locale/i18n'

export default (context = {}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const sagaMiddleware = saga();
    const store = createStore(rootReducer,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
            ),
        ));

    i18(store.getState().locale);

    sagaMiddleware.run(rootSaga, context);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').store;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
