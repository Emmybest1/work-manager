import {createSelector} from 'reselect';
import {RootState} from 'MyTypes';

const selectState = (state: RootState) => state.work;

export const selectIsLoadingWork = createSelector([selectState], (work) => work.isLoading);
export const selectErrorWork = createSelector([selectState], (work) => work.error);
export const selectFetchedWork = createSelector([selectState], (work) => work.fetchedWork);
export const selectPostedWork = createSelector([selectState], (work) => work.postedWork);
