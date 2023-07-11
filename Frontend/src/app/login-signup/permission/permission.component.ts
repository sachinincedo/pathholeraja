import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginSignupService } from 'src/app/services/login-signup/login-signup.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  microphonePermission: boolean = false;
  contactsPermission: boolean = false;
  locationPermission :boolean = false;
   navigator: Navigator;
  requestLocationPermission() {
    if (this.locationPermission) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
            // Do something with the obtained coordinates
          },
          (error) => {
            console.error('Error obtaining location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  }
  
  requestContactsPermission() {
    if (this.contactsPermission) {
      // navigator.contacts.request(['contacts'])
      //   .then((contacts) => {
      //     // Phone contacts permission granted
      //     console.log('Phone contacts permission granted');
      //   })
      //   .catch((error) => {
      //     // Phone contacts permission denied or error occurred
      //     console.error('Phone contacts permission denied or error occurred:', error);
      //   });
    }
  }
  requestMicrophonePermission() {
    if (this.microphonePermission) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          // Microphone permission granted
          console.log('Microphone permission granted');
        })
        .catch((error) => {
          // Microphone permission denied or error occurred
          console.error('Microphone permission denied or error occurred:', error);
        });
    }
  }
  constructor(private location: Location,
    private router : Router,
    private apiService : LoginSignupService) { }

  ngOnInit(): void {
  }
  nextButton(){
    const permissionAccess ={
      microphonePermission: this.microphonePermission,
      contactsPermission: this.contactsPermission,
      locationPermission : this.locationPermission
    }
    console.log('Permission API ',permissionAccess);
    localStorage.removeItem('mobileNumber');
    localStorage.removeItem('isdCode');
    localStorage.removeItem('countryCode');
    // this.apiService.verifyPhoneNumber(permissionAccess).subscribe(
    //   (response) =>{
    //       // if (response.status === "OK") {
    //       //     // this.router.navigate(['/login']);
    //       // }
    //       // else{
    //       //     console.log('Authenication Failed');
    //       // }
    //   },
    //   error => console.log(error)
    // );
        this.router.navigate(['/login']);
  }
  backButton() {
     this.location.back();
    
  }
}
