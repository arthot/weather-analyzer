import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import saga from 'redux-saga'
import reducers from 'src/reducers'

require('src/styles/common.less')

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(saga()),
));

const render = (hydrate = false) => {
  const container = document.getElementById('root');
  const app = (
    <AppContainer>
      <Provider store={store}>
        <span>Hi from react!</span>
      </Provider>
    </AppContainer>
  );
  if (hydrate) {
    ReactDOM.hydrate(app, container);
  } else {
    ReactDOM.render(app, container);
  }
};

render(true);

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}
