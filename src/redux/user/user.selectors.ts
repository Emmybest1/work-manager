import {createSelector} from 'reselect';

const selectUserState = (state: any) => state.user;

export const selectIsLoading = createSelector([selectUserState], (user) => user.isLoading);
export const selectError = createSelector([selectUserState], (user) => user.error);
export const selectRegisteredUser = createSelector([selectUserState], (user) => user.registeredUser);
