import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { AdminService } from 'src/app/services/admin.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ProfileActions from './profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminService
  ) {}
  // @Effect() name$: Observable<Action> = this.actions$.pipe(ofType('ACTIONTYPE'));
  getUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.ProfileActionTypes.ProfileGetUserInfo),
    mergeMap(() => this.adminService.getUserInfo()
      .pipe(
        map(info => ProfileActions.ProfileGetUserSuccess({info})
        ),
        catchError(() => EMPTY)
      ))
    )
  );

}