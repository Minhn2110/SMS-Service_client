import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private http: HttpClient
  ) {

  }
  // {string keyword, bool? isDesc, int? page, int? pageSize
  getUserList(keyword: string, isDesc: boolean, page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Admin/UserList?keyword=${keyword}&isDesc=${isDesc}&page=${page}&pageSize=${pageSize}`);
  }
  changeAccountStatus(body) {
    return this.http.put<any>(`${environment.apiUrl}/api/Admin`, body);
  }
  overViewAnalysis() {
    return this.http.get<any>(`${environment.apiUrl}/api/Admin/OverviewAnalysis`);
  }
  msgAnalysis(fromDate, toDate) {
    return this.http.get<any>(`${environment.apiUrl}/api/Admin/MessageAnalysis?fromDate=${fromDate}&toDate=${toDate}`);

  }
}