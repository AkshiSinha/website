import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class UserAuthService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (sessionStorage.getItem("loggedUser")) {
      // logged in so return true
      return true;
    }
    // not logged in so open Sign In modal to login
    alert("You are not logged in! Sign in to continue.");
    this.router.navigate(["./reactiveform"]);
    return false;
  }
}
