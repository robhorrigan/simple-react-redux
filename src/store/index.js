import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [ thunk ];

// This just gives us access to the Redux DevTools
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'simple-react-redux' })
    : compose;

const combinedCreateStore = composeEnhancers(
    applyMiddleware(...middlewares)
)(createStore);

export default function configureStore(initialState) {
  return combinedCreateStore(rootReducer, initialState);
}