import {Reducer} from 'redux';
import {UserActions} from './user.actions';
import {types} from './user.types';

export type InitialState = {
  isLoading: boolean;
  error: string | null;
  registeredUser: string;
};

export const initialState: InitialState = {
  isLoading: false,
  error: null,
  registeredUser: '',
};

export const reducer: Reducer<InitialState, UserActions> = (state = initialState, action): InitialState => {
  switch (action.type) {
    case types.REGISTER_USER_STARTED:
      return {...state, isLoading: true};

    case types.REGISTER_USER_SUCCESSFULL:
      return {...state, isLoading: false, registeredUser: action.payload};

    case types.REGISTER_USER_FAILED:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
