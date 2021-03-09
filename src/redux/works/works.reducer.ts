import {Reducer} from 'redux';
import {TProject} from '../../components/pages/add-work/add-work.component';
import {WorksAction} from './works.actions';
import {types} from './works.types';

export type InitialState = {
  isLoading: boolean;
  error: string | null;
  works: TProject[];
};

export const initialState: InitialState = {
  isLoading: false,
  error: null,
  works: [],
};

export const reducer: Reducer<InitialState, WorksAction> = (state = initialState, action): InitialState => {
  switch (action.type) {
    case types.GET_WORKS_STARTED:
      return {...state, isLoading: true};

    case types.GET_WORKS_SUCCESSFULL:
      return {...state, isLoading: false, works: action.payload as TProject[]};

    case types.GET_WORKS_FAILED:
      return {...state, isLoading: false, error: action.payload as string};

    default:
      return state;
  }
};
