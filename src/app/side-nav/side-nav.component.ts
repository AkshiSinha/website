import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  

  constructor(private router: Router) {
    
  } 
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  loadform(){
    this.router.navigate(['feedback']);
  }
  loadDashboard(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
