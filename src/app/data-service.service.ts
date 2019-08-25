import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {emp} from './employee.module';
//import {emp} from './employee.module';
import { HttpHeaders ,HttpHeaderResponse} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
// import {Observable} from "rxjs/Rx";

// import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  username:any;
  uname="";
  public currentUser: Observable<any>;
  url:string='http://localhost:9192/feedback/';

  constructor(private  httpClient: HttpClient) { }

  enroll(user:emp)
  {
    this.uname=user.firstName;
   // this.currentUser=user.firstName;
   // sessionStorage.setItem('loggedUser', user.firstName);
   console.log(this.uname);
}

enrollpost(user:emp)
{
  console.log(user);
  console.log(user.firstName+"adi i")
  
  return this.httpClient.post<emp>(this.url,user);
}
}

