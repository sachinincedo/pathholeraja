import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Varibles Declared 
  errorMessage: string ='';
  loginForm: FormGroup  = new FormGroup({});
  selectedCountry: string;
  model: string;
  platform: string;

  constructor(private formBuilder: FormBuilder,private apiService: LoginSignupService,private router: Router) { }
    
// ---------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    // Login Form Intialization
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required,Validators.minLength(10)]],
      password: ['', Validators.required]
    });
    // To Check Device Platform  ( ANDROID / WEB / IOS )
    const userAgents = window.navigator.userAgent.toLowerCase();
    if (userAgents.includes('android')) {
      console.log('User is using an Android device');
      this.platform = 'ANDROID'
    } else if (userAgents.includes('iphone') || userAgents.includes('ipad') || userAgents.includes('ipod')) {
      console.log('User is using an iOS device');
      this.platform = 'IOS'
    } else {
      console.log('User is using WEB device');
       this.platform= 'WEB'
    }
    // TO CHECK MODEL OF USER ( WEB / IOS )
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
    this.model='ANDROID'
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
       this.model='IOS'
    } else {
    }
  }

// ---------------------------------------------------------------------------------------------------------------------

  selectCountry(country: string) {
    this.selectedCountry = country;
  }

   // LOGIN BUTTON FUNCTION 
  onLogin() {
    const deviceId = uuidv4();
    const phoneNumber = this.loginForm.get('phoneNumber')!.value;
    const password = this.loginForm.get('password')!.value;
    const pushId = uuidv4();

    // LOGIN DETAILS OBJECT - WILL BE USED TO PASS AS OBJECT TO SERVER FOR VALIDATION
    const loginDetails = {
       password  : password,
       phoneNumber : phoneNumber,
       deviceDetails:
        {
          devicePlatform : this.platform,
          deviceId: deviceId,
          deviceModel: this.model,
          devicePushId: pushId
        },
       mode : 'PHONE'
    }

    // CHECKING IF FORM IS VALID OR NOT , IN CASE OF VALID HIT SERVER API 
    if (this.loginForm.valid) {
       console.log('LOGIN DETAILS => ',loginDetails);
       this.selectedCountry=null;

       this.apiService.loginUser(loginDetails).subscribe(
        (response) => {
            console.log('LOGIN API Response (SERVER)',response);
            // Storing token from  backend in Local storage
            localStorage.setItem('token', response.token)
            if (response.status === "OK") {
                this.router.navigate(['/loggedin/call']);
                // Getting USER ID of User stored in Local
                localStorage.setItem('user', response.userId);
            }else{
                this.errorMessage = response.message; 
                console.log('INVALID USER ');
              }
          },
           error => console.log(error)
         );
        this.errorMessage = '';
     } else{
        // If User Tried to click Next without Submitting Deatils , Error Message will be thrown
        this.errorMessage = 'Invalid Phone No !'
        setTimeout(() => { this.errorMessage=''}, 3000);
    }
    // reseting the values of Login form after submitting data 
        this.loginForm.reset();
        this.selectedCountry = null;
  }
}
