import { createSelector } from '@ngrx/store';

export const profileFeature = (state: any) => state.profile;

export const userInfo = createSelector(
  profileFeature,
  (state: any) => state.userInfo
);
export const friendList = createSelector(
  profileFeature,
  (state: any) => state.friendList
);