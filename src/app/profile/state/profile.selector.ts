import { createSelector } from '@ngrx/store';

export const profileFeature = (state: any) => state.profile;

export const selectFeatureProperty = createSelector(
  profileFeature,
  (state: any) => state.userInfo
);