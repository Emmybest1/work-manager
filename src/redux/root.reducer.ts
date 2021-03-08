import {combineReducers} from 'redux';
import {reducer as user} from './user/user.reducer';

export const rootReducer = combineReducers({
  user,
});
