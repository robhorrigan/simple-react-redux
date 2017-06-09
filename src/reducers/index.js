import { combineReducers } from 'redux';
import app from '../containers/app/reducers';

const rootReducer = combineReducers({
    app
});

export default rootReducer;