import {createSelector} from 'reselect';
import {RootState} from 'MyTypes';

const selectState = (state: RootState) => state.work;

export const selectIsLoading = createSelector([selectState], (work) => work.isLoading);
export const selectError = createSelector([selectState], (work) => work.error);
export const selectFetchedWork = createSelector([selectState], (work) => work.fetchedWork);
export const selectPostedWork = createSelector([selectState], (work) => work.postedWork);
