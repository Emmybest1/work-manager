import {createSelector} from 'reselect';
import {RootState} from 'MyTypes';

const selectUserState = (state: RootState) => state.user;

export const selectIsLoadingUser = createSelector([selectUserState], (user) => user.isLoading);
export const selectErrorUser = createSelector([selectUserState], (user) => user.error);
export const selectRegisteredUser = createSelector([selectUserState], (user) => user.registeredUser);
