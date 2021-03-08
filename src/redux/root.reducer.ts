import {combineReducers} from 'redux';
import {reducer as user} from './user/user.reducer';
import {reducer as work} from './work/work.reducer';

export const rootReducer = combineReducers({
  user,
  work,
});
