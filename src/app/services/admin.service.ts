import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(
    private http: HttpClient
  ) {

  }
  sendAnonymousMsg(body) {
    return this.http.post<any>(`${environment.apiUrl}/api/Sms`, body)
  }
  getUserInfo() {
    return this.http.get<any>(`${environment.apiUrl}/api/Account/UserInfo`)
  }
  getFriendList(isPending: any, keyword: string, isDesc: boolean, page: number, pageSize: number) {
    return this.http.get<any>(`${environment.apiUrl}/api/Friend/GetFriends?isPending=${isPending}&keyword=${keyword}&isDesc=${isDesc}&page=${page}&pageSize=${pageSize}`)
  }
  sendFriendRequest(body) {
    return this.http.post<any>(`${environment.apiUrl}/api/Friends`, body)
  }
  removeFriend(body) {
    return this.http.delete<any>(`${environment.apiUrl}/api/Friend`, body)
  }
  approveFriend(body) {
    return this.http.put<any>(`${environment.apiUrl}/api/Friends`, body)
  }

  getRecommendFriend() {
    return this.http.get<any>(`${environment.apiUrl}/api/Friend/GetRecommendFriend`)
  }
  setHeader(body) {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.set('angularVN', 'Angular Viet Nam'); // --> gán lại cho biến headers
  //   return this.http.get<PostEntityModel[]>(
  //     'https://jsonplaceholder.typicode.com/posts',
  //     { headers}
  // );
    return this.http.post<any>(`${environment.apiUrl}/api/Friend`, body, { headers: new HttpHeaders({ angularVN: 'Angular Viet Nam' })})
  }

}