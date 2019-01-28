import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'

import {MEAT_API} from '../../app.api'
import { User } from './user.model';

@Injectable()
export class LoginService {

  user: User

  constructor(private http: HttpClient, private router: Router){}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
      .do(user => this.user = user)
  }

  isLoogedIn(): boolean {
    return this.user !== undefined
  }

  handlelogin(path?: string) {
    this.router.navigate(['/login', btoa(path)])
  }
}
