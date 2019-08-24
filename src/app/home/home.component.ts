import {Component,OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { Observable } from 'rxjs';

@Component(
    {
        selector:'app-home',
        templateUrl:'./home.component.html'
       
    }
)

export class HomeComponent implements OnInit {
    txt1:string='akshi';
    txt2="";
    data:string='';

    constructor(private _exampleService:DataServiceService) {}

    ngOnInit(){
     this.txt2 = this._exampleService.uname;
     console.log("username = "+ this._exampleService.uname);
    }

   
   
   
}