import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedin(): boolean {
    return this.loginService.isLoogedIn()
  }

  login() {
    this.loginService.handlelogin()
  }

  logout() {
    this.loginService.logout()
  }

}
