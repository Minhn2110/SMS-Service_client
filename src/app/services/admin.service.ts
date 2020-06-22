import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}