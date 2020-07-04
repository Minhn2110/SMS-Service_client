import { createAction, props } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export enum ProfileActionTypes {
  ProfileGetUserInfo = '[Profile] Get User Info',
  ProfileGetUserInfoSuccess = '[Profile] Get User Info Success',
  ProfileGetFriendList = '[Profile] Get Friend List',
  ProfileGetFriendListSuccess = '[Profile] Get Friend List Success',
  ProfileGetSubscribeService = '[Profile] Get Subscribe Service',
  ProfileGetSubscribeServiceSuccess = '[Profile] Get Subscribe Service Success',
  ProfileSubscriptionPrice = '[Profile] Dispatch Price'

}

export const ProfileGetUserInfo = createAction(ProfileActionTypes.ProfileGetUserInfo);
export const ProfileGetUserSuccess = createAction(ProfileActionTypes.ProfileGetUserInfoSuccess, props<{info: any}>());

export const ProfileGetFriendList = createAction(ProfileActionTypes.ProfileGetFriendList);
export const ProfileGetFriendListSuccess = createAction(ProfileActionTypes.ProfileGetFriendListSuccess, props<{friendList: any}>());
export const ProfileGetSubscribeService = createAction(ProfileActionTypes.ProfileGetSubscribeService, props<{status: any}>());
export const ProfileGetSubscribeServiceSuccess = createAction(ProfileActionTypes.ProfileGetSubscribeServiceSuccess, props<{subscribeList: any}>());

export const ProfileSubscriptionPrice = createAction(ProfileActionTypes.ProfileSubscriptionPrice, props<{id: any, price: any, subscriptionPlan: any}>());