import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { configureStore } from 'src/store'

require('src/styles/common.less')

const store = configureStore();

const render = (hydrate = false) => {
  const container = document.getElementById('root');
  const app = (
    <AppContainer>
      <Provider store={store}>
        <span>Hi from react2!</span>
      </Provider>
    </AppContainer>
  );
  if (hydrate) {
    ReactDOM.hydrate(app, container);
  } else {
    ReactDOM.render(app, container);
  }
};

render(false);

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}
