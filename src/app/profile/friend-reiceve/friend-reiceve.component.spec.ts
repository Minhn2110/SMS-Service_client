/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FriendReiceveComponent } from './friend-reiceve.component';

describe('FriendReiceveComponent', () => {
  let component: FriendReiceveComponent;
  let fixture: ComponentFixture<FriendReiceveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendReiceveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendReiceveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
