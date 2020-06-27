

import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const initialState = {
  userInfo: ''
};
 
const _counterReducer = createReducer(
  initialState,
  on(ProfileActions.ProfileGetUserSuccess, (state, { info }) => {
    return {...state, userInfo: info}
  }),
  on(ProfileActions.ProfileGetFriendListSuccess, (state, { friendList }) => {
    return {...state, friendList: friendList}
  }),
  // on(decrement, state => state - 1),
  // on(reset, state => 0),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

