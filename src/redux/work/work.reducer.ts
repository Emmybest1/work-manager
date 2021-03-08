import {Reducer} from 'redux';
import {types} from './work.types';
import {WorkAction} from './work.actions';
import {NewProject} from '../../components/pages/add-work/add-work.component';

export type InitialState = {
  isLoading: boolean;
  error: Error | null;
  postedWork?: NewProject;
  fetchedWork: NewProject;
};

export const initialState: InitialState = {
  isLoading: false,
  error: null,
  fetchedWork: {} as NewProject,
};

export const reducer: Reducer<InitialState, WorkAction> = (state = initialState, action): InitialState => {
  switch (action.type) {
    case types.GET_WORK_STARTED:
      return {...state, isLoading: true};

    case types.GET_WORK_SUCCESSFULL:
      return {...state, isLoading: false, fetchedWork: action.payload};

    case types.GET_WORK_FAILED:
      return {...state, isLoading: false, error: action.payload};

    case types.POST_WORK_STARTED:
      return {...state, isLoading: true};

    case types.POST_WORK_SUCCESSFULL:
      return {...state, isLoading: false, postedWork: action.payload};

    case types.POST_WORK_FAILED:
      return {...state, isLoading: false, error: action.payload};

    case types.DELETE_WORK_STARTED:
      return {...state, isLoading: true};

    case types.DELETE_WORK_SUCCESSFULL:
      return {...state, isLoading: false, postedWork: action.payload};

    case types.DELETE_WORK_FAILED:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
