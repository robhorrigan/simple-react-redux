import { createStore, combineReducers, compose } from 'redux';
import * as reducers from './reducers'

const reducer = combineReducers(reducers);

// This just gives us access to the Redux DevTools
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'simple-react-redux' })
    : compose;

const combinedCreateStore = composeEnhancers()(createStore);

export default function configureStore(initialState) {
  return combinedCreateStore(reducer, initialState);
}