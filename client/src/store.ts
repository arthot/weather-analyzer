import { applyMiddleware, compose, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import saga from 'redux-saga'
import rootReducer from 'src/reducers'

const composeEnhancers = composeWithDevTools({});

export function configureStore(initialState = {}) {
    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(saga()),
    ));

    if (module.hot) {
        module.hot.accept('src/reducers', () => {
            const nextRootReducer = require('src/reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
