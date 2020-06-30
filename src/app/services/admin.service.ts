import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(
    private http: HttpClient
  ) {

  }
  sendAnonymousMsg(body) {
    return this.http.post<any>(`${environment.apiUrl}/api/Sms`, body)
  }
  editProfile(body) {
    return this.http.put<any>(`${environment.apiUrl}/api/Account/EditProfile`, body)
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
    // return this.http.delete<any>(`${environment.apiUrl}/api/Friends`, body)
    return this.http.request('delete', `${environment.apiUrl}/api/Friends`, {
      body: body,
      observe: 'response'
    });
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
  getAllServices(status): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Services/GetServices?isRegistered=${status}`);
  }
  subscribeServices(id, day) {
    return this.http.get<any>(`${environment.apiUrl}/api/Services/Subscribe?serviceId=${id}&due=${day}`);
  }
  unSubscribeServices(id) {
    return this.http.get<any>(`${environment.apiUrl}/api/Services/UnSubscribe?serviceId=${id}`);
  }

}