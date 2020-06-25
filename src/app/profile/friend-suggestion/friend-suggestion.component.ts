import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { increment, decrement, reset } from 'src/app/state/app.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'sms-friend-suggestion',
  templateUrl: './friend-suggestion.component.html',
  styleUrls: ['./friend-suggestion.component.css']
})
export class FriendSuggestionComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    
  ) {

   }

  ngOnInit() {

  }

 


}
