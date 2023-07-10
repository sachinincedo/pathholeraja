import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {
  // verificationCode : number;
  loginForm: FormGroup;
  errorMessage: string='';
  MobileNo : any ;
  resendText: string='';
  constructor(private location: Location,
    private router : Router,
    private apiService : LoginSignupService) { 
      this.loginForm = new FormGroup({
        verificationCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
      });
    }

  ngOnInit(): void {
    this.MobileNo= localStorage.getItem('mobileNumber');
  }
  resendOtp(){
     this.resendText =' OTP sent Again on Mobile Number';
     setTimeout(() => {
      this.resendText='';
      }, 4000);
      const otp = {
        verificationMethod : "SMS",
        phoneNumber:{
          number  : localStorage.getItem('mobileNumber'),
          isdCode:  localStorage.getItem('isdCode'),
          regionCode: localStorage.getItem('countryCode')
        },
        clientHashKey: "ok98+"
      }
      this.apiService.resendOtp(otp).subscribe(
        (response) =>{
            if (response.success === true) {
               
                // Getting USER ID of User stored in Local
                // localStorage.setItem('verificationCode',response.verificationCodePhone)
                // localStorage.setItem('user', response.userId);
                // this.router.navigate(['/profile']);
            }
            else{
                this.errorMessage = response.errorMsg; 
                console.log('Authenication Failed');
            }
        },
        error => console.log(error)
      );
  }
  nextButton(){
    const otpcode = this.loginForm.get('verificationCode')!.value;
    const otpDetails ={
      verificationCode: otpcode,
      phoneNumber: "+" + localStorage.getItem('mobileNumber')
    }
    if (this.loginForm.valid) {
      console.log('PHONE VERIFY DATA SENT :',otpDetails)
      this.apiService.otpVerification(otpDetails).subscribe(
        (response) =>{
            if (response.success === true) {
               
                // Getting USER ID of User stored in Local
                localStorage.setItem('verificationCode',response.verificationCodePhone)
                // localStorage.setItem('user', response.userId);
                this.router.navigate(['/profile']);
            }
            else{
                this.errorMessage = response.errorMsg; 
                console.log('Authenication Failed');
            }
        },
        error => console.log(error)
      );
        this.loginForm.reset();
      }
      else{
        this.errorMessage='ENTER VALID OTP NUMBER';
        setTimeout(() => {
          this.errorMessage='';
          }, 3000);
        console.log('ERROR');
      }
    // this.router.navigate(['/profile']);
  }
  backButton() {
    localStorage.removeItem('mobileNumber');
    localStorage.removeItem('isdCode');
    this.location.back();
  }
}
