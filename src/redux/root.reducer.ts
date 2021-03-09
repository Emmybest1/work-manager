import {combineReducers} from 'redux';
import {reducer as user} from './user/user.reducer';
import {reducer as work} from './work/work.reducer';
import {reducer as works} from './works/works.reducer';

export const rootReducer = combineReducers({
  user,
  work,
  works,
});
