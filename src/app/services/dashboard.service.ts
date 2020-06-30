import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({providedIn: 'root'})
export class DashboardService {
  constructor(
    private http: HttpClient
  ) {

  }

  getMemberHousehold(householderId: number): Observable<any> {
    return this.http.get<any>(`api/memberunavailables/householdavailability?householderId=` + householderId);
  }
  getArticle(): Observable<any> {
    return this.http.get<any>(`https://t1809ecoinmarket20200608234615.azurewebsites.net/api/posts`,  {
      // headers: {
      // 'Content-Type': 'application/json; charset=UTF-8',
      // }
    });
  }
  getAllServices(status): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Services/GetServices?isRegistered=${status}`);
  }

}