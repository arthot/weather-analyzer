import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import saga from 'redux-saga'
import { store as rootReducer } from 'src/reducers'
import rootSaga from 'src/saga'

const composeEnhancers = composeWithDevTools({});

export function configureStore(history, initialState = {}) {
    const sagaMiddleware = saga();
    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware, routerMiddleware(history))
    ));

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('src/reducers', () => {
            const nextRootReducer = require('src/reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
