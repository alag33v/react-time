import { combineReducers } from 'redux';
import { timeReducer } from './timeDucks';

const rootReducer = combineReducers({
  time: timeReducer
});

export default rootReducer;
