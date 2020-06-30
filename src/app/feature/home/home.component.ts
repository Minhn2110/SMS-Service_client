import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friend: any;
  constructor(
    private dashBoardService: DashboardService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.dashBoardService.getAllServices(null).subscribe(data => console.log(data));
    this.getSuggestionFriend();

  }

  getSuggestionFriend() {
    this.adminService.getRecommendFriend().subscribe(friends => {
      console.log(friends);
      this.friend = friends;
      
    })
  }

}
