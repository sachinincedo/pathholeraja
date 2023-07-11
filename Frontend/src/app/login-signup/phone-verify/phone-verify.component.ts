import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html',
  styleUrls: ['./phone-verify.component.css']
})
export class PhoneVerifyComponent implements OnInit {
  selectedCountry: string;
  isdCode : string;
  errorMessage : string ='';
  loginForm: FormGroup;
  selectCountry(country: string) {
    this.selectedCountry = country;
    switch(country)
    {
      case 'IN'  : this.isdCode = '91';
                    break;
      case 'GER' : this.isdCode = '49';
                    break;
      case 'UK'  : this.isdCode = '44';
                    break;
      case 'FR'  : this.isdCode = '33';
                    break;
      case 'JAP' : this.isdCode = '81';
    }
  }

  constructor(private location: Location,
    private router : Router,
    private apiService : LoginSignupService) {
      this.loginForm = new FormGroup({
        phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
      });
    }

  ngOnInit(): void {
    
    }
   
  nextButton(){
    // console.log(this.phoneNumber);
    // console.log(this.selectedCountry);
    // console.log(this.isdCode);
    const phoneNumber = this.loginForm.get('phoneNumber')!.value;
    const PhoneNumberVerify ={
      verificationMethod : "SMS",
      phoneNumber:{
        number :"+"+ this.isdCode + phoneNumber,
        isdCode: this.isdCode,
        regionCode: this.selectedCountry
      }
    }
    localStorage.setItem('mobileNumber', "+"+this.isdCode + phoneNumber);
    localStorage.setItem('isdCode',this.isdCode);
    localStorage.setItem('countryCode',this.selectedCountry);
    if (this.loginForm.valid) {
    console.log('PHONE VERIFY DATA SENT :',PhoneNumberVerify)
    this.apiService.verifyPhoneNumber(PhoneNumberVerify).subscribe(
      (response) =>{
        console.log('SERVER RESPONSE PHONE VERIFY',response);
          if (response.success === true) {
              this.router.navigate(['/otp-verify']);
              // Getting USER ID of User stored in Local
              // localStorage.setItem('user', response.userId);
          }
          else{
              this.errorMessage = response.errorMsg; 
              console.log('Authenication Failed');
          }
      },
      error => console.log(error)
    );
      this.loginForm.reset();
    this.selectedCountry = null;
    }
    else{
      this.errorMessage='ENTER VALID MOBILE NUMBER';
      setTimeout(() => {
        this.errorMessage='';
        }, 3000);
      console.log('ERROR');
    }
    this.router.navigate(['/otp-verify']);
  }
  
  backButton() {
    this.location.back();
  }
}
