import * as constants from '../constants';

const initialState = {
  counter: {
    count: 0
  }
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: {
          count: state.counter.count + 1
        }
      });
    case constants.DECREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: {
          count: state.counter.count - 1
        }
      });
    default:
      return state;
  }
};

export default counter;