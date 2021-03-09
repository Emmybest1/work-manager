import {action, ActionType} from 'typesafe-actions';
import {TProject} from '../../components/pages/add-work/add-work.component';
import {types} from './works.types';
import {$app__api} from '../../client/https-request';

/*********************************************
 *@action getWorks actions aka get api request
 *********************************************/
export const getWorksSuccessfull = (payload: TProject[]) => action(types.GET_WORKS_SUCCESSFULL, payload);

export const getWorksFailed = (payload: string) => action(types.GET_WORKS_FAILED, payload);

export const getWorks = (searchKeyword?: string) => async (
  dispatch: (arg0: {type: string; payload?: TProject[] | string}) => void
) => {
  dispatch(action(types.GET_WORKS_STARTED));

  try {
    const response = await $app__api.get(
      `${process.env.REACT_APP_API_DEVURL ?? 'http://localhost:4000/'}works${
        !!searchKeyword ? `?q=${searchKeyword}` : ''
      }`
    );

    if (response.status === 200) {
      dispatch(getWorksSuccessfull(response.data as TProject[]));
    } else {
      //call api error engine for serverside error
    }
  } catch (error) {
    dispatch(getWorksFailed(error?.message));
    //call api error engine here for client side error
  }
};

export type WorksAction = ActionType<
  typeof getWorksSuccessfull | typeof getWorksFailed | typeof getWorks | typeof types.GET_WORKS_STARTED
>;
