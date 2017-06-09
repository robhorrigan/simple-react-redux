import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import makeRoutes from './routes';

import Root from './Root';
import './style.css';

import configureStore from './store';

const store = configureStore();
const routes = makeRoutes(store)

ReactDOM.render(
  <Provider store={store}>
    <Root routes={routes} />
  </Provider>,
  document.getElementById('root')
);
