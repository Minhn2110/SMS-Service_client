import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'sms-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'email', 'status', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>();

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartLabels: Label[] = ['CountInRange', 'CountPerDay', 'CountPerMonth', 'ProfitInRange', 'ProfitPerDay', 'ProfitPerMonth'];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Unit',
    backgroundColor: '#2a41e8', }
  ];
  // barChartData: ChartDataSets[] = [];
  messageData: any[] = [];
  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.backendService.overViewAnalysis().subscribe(res => {
      console.log(res);
    })
    this.backendService.msgAnalysis('1/1/2020', null).subscribe(res => {
      console.log('msg', res);
      if (res) {
        for (const property in res) {
          this.messageData.push(res[property]);
          console.log(this.messageData);
        }
        this.barChartData = [
          {
            data: this.messageData,
            label: 'Unit',
            backgroundColor: '#2a41e8',
            hoverBackgroundColor: '#536dfe'
          }
        ];

      }
    })

    this.backendService.getUserList('', true, 1, 100).subscribe(data => {
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.paginator = this.paginator;
      console.log(data);
    })

  }
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.dataSource.paginator = this.paginator

    // }, 1000);
  }
  changeStatus(e, id) {
    const body = {
      Status: e.checked ? 1 : 0,
      UserId: id
    }
    this.backendService.changeAccountStatus(body).subscribe(res => {
      console.log(res);
    })
    console.log(e);
  }






}
