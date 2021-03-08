import {createSelector} from 'reselect';

const selectUserState = (state: any) => state.user;

export const selectIsLoadingUser = createSelector([selectUserState], (user) => user.isLoading);
export const selectErrorUser = createSelector([selectUserState], (user) => user.error);
export const selectRegisteredUser = createSelector([selectUserState], (user) => user.registeredUser);
