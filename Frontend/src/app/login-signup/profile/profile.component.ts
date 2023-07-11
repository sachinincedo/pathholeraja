import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileSetupForm: FormGroup;
  errorMessage: string='';
  model :string;
  platform: string;

  constructor(private location: Location,
    private router : Router,
    private apiService : LoginSignupService) {
      this.profileSetupForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      });
    }  
  ngOnInit(): void {
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
    
  nextButton(){
    const firstName = this.profileSetupForm.get('firstName')!.value;
    const lastName = this.profileSetupForm.get('lastName')!.value;
    const password = this.profileSetupForm.get('password')!.value;
    const pushId = uuidv4();
    const deviceId = uuidv4();
    const profileDetails = {
      phoneNumber: {
        regionCode: localStorage.getItem('countryCode'),
        isdCode: localStorage.getItem('isdCode'),
        number: "+"+ localStorage.getItem('mobileNumber')
      },
    verificationCodePhone: localStorage.getItem('verificationCode'),
    firstName: firstName,
    lastName: lastName,
    password: password,
    location: "true",
    locationDetails: {
        currentCountry: "India",
        currentStateCity: "Ghaziabad",
        currentLocality: "Indirapuram",
        currentTimezone: " Asia/Kolkata"
    },
    deviceDetails: {
        devicePlatform: this.platform,
        deviceId: pushId,
        devicePushId:deviceId ,
        deviceModel: this.model

    },
    roles: ["USER"],
    networkType: "WLAN"
    }
    if (this.profileSetupForm.valid) {
      console.log('PHONE VERIFY DATA SENT :',profileDetails)
      this.apiService.profile(profileDetails).subscribe(
        (response) =>{
            if (response.success === true) {
                this.router.navigate(['/permission']);
                // Getting USER ID of User stored in Local
              
            }
            else{
                this.errorMessage = response.errorMsg; 
                console.log('Authenication Failed');
            }
        },
        error => console.log(error)
      );
        this.profileSetupForm.reset();

      }
      else{
        this.errorMessage='ENTER ALL DETAILS';
        setTimeout(() => {
          this.errorMessage='';
          }, 3000);
        console.log('ERROR');
      }
    this.router.navigate(['/permission'])
  }
  backButton() {
    this.location.back();
  }
}

