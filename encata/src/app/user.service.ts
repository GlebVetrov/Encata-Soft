import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userData): Observable<any> {
    return this.http
      .get('localhost:3000/api/login');
  }

  setUser(userData): Observable<any> {
    return this.http
      .get('localhost:3000/api/registration');
  }
}
