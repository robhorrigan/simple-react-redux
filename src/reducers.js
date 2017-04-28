import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './actions'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
};
