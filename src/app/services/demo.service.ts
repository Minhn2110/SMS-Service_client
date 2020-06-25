import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DemoService {
  constructor(
    private httpClient: HttpClient
  ) {

  }
  getListPosts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('angularVN', 'Angular Viet Nam'); // --> gán lại cho biến headers
    return this.httpClient.get<any>(
        'https://jsonplaceholder.typicode.com/posts',
        { headers}
    );
}
}