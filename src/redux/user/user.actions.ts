import {action, ActionType} from 'typesafe-actions';
import {$app__api} from '../../client/https-request';
import {User, RegisterUserSuccessfull, RegisterUserFailed} from 'MyTypes';
import {types} from './user.types';

export const registerUserSuccessfull = (payload: string): RegisterUserSuccessfull =>
  action(types.REGISTER_USER_SUCCESSFULL, payload);

export const registerUserFailed = (payload: string): RegisterUserFailed => action(types.REGISTER_USER_FAILED, payload);

export const registerUser = (data: User) => async (dispatch: (arg0: {type: string}) => void) => {
  dispatch(action(types.REGISTER_USER_STARTED));

  try {
    const response = await $app__api.post(`${process.env.REACT_APP_API_DEVURL ?? 'http://localhost:4000/'}users`, data);

    if (response.status === 200) {
      dispatch(registerUserSuccessfull(response.data.email));
    } else {
      // invoke error engine from here with the server side response message
    }
  } catch (error) {
    dispatch(registerUserFailed(error.message));
    // optional to invoke error engine from here for client side
  }
};

export type UserActions = ActionType<
  typeof registerUserSuccessfull | typeof registerUserFailed | typeof registerUser | typeof types.REGISTER_USER_STARTED
>;
