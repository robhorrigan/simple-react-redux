import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './actions'

export const counter = (state = 0, action) => {
  if (action.type === INCREMENT_COUNTER) {
      return state + 1
  } else if (action.type === DECREMENT_COUNTER) {
      return state - 1
  } else {
      return state
  }
};
