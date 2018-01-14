import createHistory from 'history/createBrowserHistory'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Root } from 'src/components/global/Root'
import { configureStore } from 'src/store'

require('src/styles/common.less')

const history = createHistory();
const store = configureStore(history);

const render = (App: React.ComponentClass, hydrate = false) => {
  const container = document.getElementById('root');
  const app = (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
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
