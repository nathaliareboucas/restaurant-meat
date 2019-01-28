import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedinGuard implements CanLoad {

  constructor(private loginService: LoginService){}

  canLoad(route: Route): boolean {
    const loggedin = this.loginService.isLoogedIn()
    if(!loggedin) {
      this.loginService.handlelogin(`/${route.path}`)
    }
    return loggedin
  }

}
