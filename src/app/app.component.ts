import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataServiceService } from "./data-service.service";
import { observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "BasicWebsite";
  public user: any;

  constructor(
    private router: Router,
    private user_service: DataServiceService
  ) {
    // this.user = this.user_service.currentUser;
    // this.user_service.currentUser.subscribe(x => this.user = x);
  }
  userLogout() {
    sessionStorage.clear();
    window.location.reload();
  }
  ngOnInit() {
    this.router.navigate(["./reactiveform"]);
  }

  // ngOnInit() {
  // //    this.user = sessionStorage.getItem('loggedUser');
  // // }
  // }
}
