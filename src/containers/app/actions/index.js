import * as CONSTANTS from '../constants/index.js';

export const incrementCounter = () => {
  return {
    type: CONSTANTS.INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: CONSTANTS.DECREMENT_COUNTER
  }
}