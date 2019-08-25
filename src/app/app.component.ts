import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BasicWebsite';
 public user:any;

  constructor(private router: Router,private user_service:DataServiceService) { 
    
    
    this.router.navigate(['./reactiveform']);
   
    this.user=this.user_service.currentUser;
    // this.user_service.currentUser.subscribe(x => this.user = x);
    console.log(this.user+"hello");
    
  }
 
  // ngOnInit() {
    
  // //    this.user = sessionStorage.getItem('loggedUser');
  // // }
  // }
}
