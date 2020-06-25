import { createAction, props } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export enum ProfileActionTypes {
  ProfileGetUserInfo = '[Profile] Get User Info',
  ProfileGetUserInfoSuccess = '[Profile] Get User Info Success'
}

export const ProfileGetUserInfo = createAction(ProfileActionTypes.ProfileGetUserInfo);

export const ProfileGetUserSuccess = createAction(ProfileActionTypes.ProfileGetUserInfoSuccess, props<{info: any}>());