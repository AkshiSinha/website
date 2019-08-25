import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  myForm:FormGroup;

  id:number;
  firstName:string;
  feedback:string;
  

  constructor(private router: Router,private formBuilder: FormBuilder,private postService:DataServiceService) { 

    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
        ]),
      
      feedback: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(12)        
      ])
    })
  
    }
  

  ngOnInit() {
  }
  onRegistrationFormSubmit() {
    this.isSubmitted = true;

    if(this.registrationForm.valid){      
      console.log("User Registration Form Submit", this.registrationForm.value);
      //this.postService.username = this.registrationForm.value;
 

      this.postService.enrollpost(this.registrationForm.value).subscribe(res =>
        {if(res){
          console.log(res);
        }}); 
      
      //this.router.navigate(['./dashboard']);
      
    
  
   
  


}
}

}
