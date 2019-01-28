import { Injectable } from "@angular/core";
import { CanLoad, Route,
      ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService){}

  checkAuthentication(path: string): boolean {
    const loggedin = this.loginService.isLoogedIn()
    if(!loggedin) {
      this.loginService.handlelogin(`/${path}`)
    }
    return loggedin
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  canActivate(activatesRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatesRoute.routeConfig.path)
  }

}
