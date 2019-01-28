import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

import {MEAT_API} from '../../app.api'
import { User } from './user.model';

@Injectable()
export class LoginService {

  user: User
  lastUrl: string
  constructor(private http: HttpClient, private router: Router){
    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
      .do(user => this.user = user)
  }

  isLoogedIn(): boolean {
    return this.user !== undefined
  }

  handlelogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)])
  }

  logout() {
    this.user = undefined
  }
}
