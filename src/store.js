import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as reducers from './reducers'

const reducer = combineReducers(reducers);

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'fe-inbox' })
    : compose;

const combinedCreateStore = composeEnhancers(
  applyMiddleware(),
)(createStore);

export default function configureStore(initialState) {
  return combinedCreateStore(reducer, initialState);
}