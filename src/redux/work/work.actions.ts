import {action, ActionType} from 'typesafe-actions';
import {types} from './work.types';
import {$app__api} from '../../client/https-request';
import {NewProject} from '../../components/pages/add-work/add-work.component';

/*
 * @action postWork actions
 */
export const postWorkSuccessfull = (payload?: NewProject) => action(types.POST_WORK_SUCCESSFULL, payload);

export const postWorkFailed = (payload: string) => action(types.POST_WORK_FAILED, payload);

export const postWork = (data: NewProject) => async (
  dispatch: (arg0: {type: string; payload?: string | NewProject}) => void
) => {
  dispatch(action(types.POST_WORK_STARTED));

  try {
    const response = await $app__api.post(`${process.env.REACT_APP_API_DEVURL ?? 'http://localhost:4000/'}work`, data);
    if (response.status === 200) {
      dispatch(postWorkSuccessfull());
    } else {
      // invoke error engine from here with the server side response message
    }
  } catch (error) {
    dispatch(postWorkFailed(error.message));
    // optional to invoke error engine for client side
  }
};

/*
 * @action putWork actions
 */

/*
 * @action deleteWork actions
 */
export const deleteWorkSuccessfull = (payload?: any) => action(types.DELETE_WORK_SUCCESSFULL, payload);

export const deleteWorkFailed = (payload: string) => action(types.DELETE_WORK_FAILED, payload);

export const deleteWork = (id: string) => async (dispatch: (arg0: {type: string; payload?: string}) => void) => {
  dispatch(action(types.DELETE_WORK_STARTED));

  try {
    const response = await $app__api.delete(`${process.env.REACT_APP_API_DEVURL ?? 'http://localhost:4000/'}works`, id);

    if (response.status === 200) {
      dispatch(deleteWorkSuccessfull());
    } else {
      // invoke error engine from here with the server side response message
    }
  } catch (error) {
    dispatch(deleteWorkFailed(error.message));
    // optional to invoke error engine for client side
  }
};

/*
 * @action getWork actions
 */
export const getWorkSuccessfull = (payload: NewProject) => action(types.GET_WORK_SUCCESSFULL, payload);

export const getWorkFailed = (payload: string) => action(types.GET_WORK_FAILED, payload);

export const getWork = (id: string) => async (
  dispatch: (arg0: {type: string; payload?: string | NewProject}) => void
) => {
  dispatch(action(types.GET_WORK_STARTED));

  try {
    const response = await $app__api.get(`${process.env.REACT_APP_API_DEVURL ?? 'http://localhost:4000/'}works/${id}`);

    if (response.status === 200) {
      dispatch(getWorkSuccessfull(response.data));
    } else {
      // invoke error engine from here with the server side response message
    }
  } catch (error) {
    dispatch(getWorkFailed(error.message));
    // optional to invoke error engine for client side
  }
};

export type WorkAction = ActionType<
  | typeof postWork
  | typeof postWorkSuccessfull
  | typeof postWorkFailed
  | typeof types.POST_WORK_STARTED
  | typeof getWork
  | typeof getWorkSuccessfull
  | typeof getWorkFailed
  | typeof types.GET_WORK_STARTED
  | typeof deleteWork
  | typeof deleteWorkSuccessfull
  | typeof deleteWorkFailed
  | typeof types.DELETE_WORK_STARTED
>;
