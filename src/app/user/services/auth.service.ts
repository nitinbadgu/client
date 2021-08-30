import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Login } from '../model/login';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'api/users/';

  //api = '/api/users/';

  //HttpClient ==> httpmodule is used
  //httpclient is a service then services are created by angular
  // here created singleton object is provided by angular via constructor and this is a called as dependency injection

  constructor(private httpclient: HttpClient) {}

  createUser(user: Register): Observable<any> {
    return this.httpclient.post(this.api + 'register', user, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  loginUser(user: Login): Observable<any> {
    return this.httpclient.post(this.api + 'login', user, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
