import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string = '';
  signUpForm: FormGroup  = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private apiService : LoginSignupService,
    private router : Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required,Validators.minLength(10)]],
      email:['',Validators.required],
      password: ['', Validators.required]
    });
  }
onSignUp(){
  const phoneNumber = this.signUpForm.get('phoneNumber')!.value;
  const password = this.signUpForm.get('password')!.value;
  const email = this.signUpForm.get('email')!.value;
  const signUpDeatils ={
    phoneNumber : phoneNumber,
    password : password,
    email : email
  }
  if (this.signUpForm.valid) {
    // console.log('Phone Number:', phoneNumber);
    // console.log('Password:', password);
    // console.log('Email',email);
    console.log('SignUpDetails Sent (FRONTEND): ',signUpDeatils);
    // this.apiService.signUpUser(signUpDeatils).subscribe(
    //   (response) =>{
    //      console.log('SIGN UPAPI Response (SERVER SIDE ) :',response);
    //       localStorage.setItem('token', response.token)
    //       if (response.status === "OK") {
    //           this.router.navigate(['/login']);
    //           // Getting USER ID of User stored in Local
    //           localStorage.setItem('user', response.userId);
    //       }
    //       // else{
    //       //     //  this.text = response.message;
    //       //     //  this.myForm.reset();   
    //       //     console.log('Eroor');
    //       // }
    //   },
    //   error => console.log(error)
    // );
    this.errorMessage='';
  }
  else{
   this.errorMessage = 'Invalid Phone No !'
  }
 this.signUpForm.reset();
}
}
