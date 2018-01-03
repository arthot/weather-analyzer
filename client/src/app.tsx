import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Root } from 'src/components/global/Root'
import { configureStore } from 'src/store'

require('src/styles/common.less')

const store = configureStore();

const render = (App: React.ComponentClass, hydrate = false) => {
  const container = document.getElementById('root');
  const app = (
    <AppContainer>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppContainer>
  );
  if (hydrate) {
    ReactDOM.hydrate(app, container);
  } else {
    ReactDOM.render(app, container);
  }
};

render(Root, false);

if (module.hot) {
  module.hot.accept('src/components/global/Root', () => {
    render(require('src/components/global/Root').Root, false);
  });
}
