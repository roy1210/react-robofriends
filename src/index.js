import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
// import 'tachyons';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
