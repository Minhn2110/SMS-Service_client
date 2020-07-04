import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { AdminService } from 'src/app/services/admin.service';
import { map, mergeMap, catchError, switchMap, tap, delay } from 'rxjs/operators';
import * as ProfileActions from './profile.actions';
import { subscribeList } from './profile.selector';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService
  ) { }
  // @Effect() name$: Observable<Action> = this.actions$.pipe(ofType('ACTIONTYPE'));
  getUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.ProfileActionTypes.ProfileGetUserInfo),
    mergeMap(() => this.adminService.getUserInfo()
      .pipe(
        map(info => ProfileActions.ProfileGetUserSuccess({ info })
        ),
        catchError(() => EMPTY)
      ))
  )
  );
  getFriendList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.ProfileActionTypes.ProfileGetFriendList),
      mergeMap(() =>
        this.adminService.getFriendList(null, '', true, 1, 10).pipe(
          map(friendList => ProfileActions.ProfileGetFriendListSuccess({ friendList })),
          // catchError(error => of(FeatureActions.actionFailure({ error })))
        )
      ),
    );
  });
  getsubscribeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.ProfileGetSubscribeService),
      mergeMap((obj) =>
        this.adminService.getAllServices(obj.status).pipe(
          tap(subscribeList => {
            subscribeList.forEach(x => {
              x.active = true;
            });
            this.adminService.getAllServices(true).subscribe(res => {
              if (res) {
                if (res.length > 0) {
                  res.forEach(item1 => {
                    subscribeList.forEach(item2 => {
                      // debugger
                      if (item1.Id === item2.Id) {
                        item2.active = false;
                      } else {
                      }
                    })
                  });
                }
              }
            })
          }
          ),
          delay(3000),
          map(subscribeList =>
            ProfileActions.ProfileGetSubscribeServiceSuccess({ subscribeList })),
          // catchError(error => of(FeatureActions.actionFailure({ error })))
        )
      ),
    )
  });

}