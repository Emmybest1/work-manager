import {createSelector} from 'reselect';
import {RootState} from 'MyTypes';

const selectState = (state: RootState) => state.works;

export const selectIsLoadingWorks = createSelector([selectState], (works) => works.isLoading);

export const selectErrorWorks = createSelector([selectState], (works) => works.error);

export const selectWorks = createSelector([selectState], (works) => works.works);
