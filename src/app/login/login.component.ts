import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import  { Router, ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  // id:number;
  // firstName:string;
  // password:string;
  
  SERVER_URL = "http://localhost:3000/employee";
  
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  myForm:FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private postService:DataServiceService) { 
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
        ]),
      
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(12)        
      ])
    },{validator:this.checkPasswords});
  
    }

    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
   // let confirmPass = group.get('confirmPass').value;
  
    return pass === 'p' ? console.log('correct') : { invalid: true }     
  }
  

  

 //n ngOnInit() {}
    onRegistrationFormSubmit() {
      this.isSubmitted = true;
  
      if(this.registrationForm.valid){      
        console.log("User Registration Form Submit", this.registrationForm.value);
        //this.postService.username = this.registrationForm.value;
   
  
        this.postService.enroll(this.registrationForm.value)
        
        this.router.navigate(['./navbar']);
        // .subscribe(res =>
          // {if(res){
          //   console.log(res);
          // }}); 
      }
    
     
    
  

}
}