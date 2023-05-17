import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string='';
  lastName: string='';
  email: string='';
  password: any='';
  @ViewChild('myForm') myForm!: NgForm;
  constructor(private apiService: SignupService,private router: Router) { }
  ngOnInit(): void {
    
  }
   emailTouched = false;
  isEmailInvalid(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.emailTouched && !emailRegex.test(this.email);
  }
  isFirstNameInvalid(): boolean {
    const firstNameRegex = /^[a-zA-Z\s]*$/;
    return !firstNameRegex.test(this.firstName);
  }
  isLastNameInvalid() : boolean{
    const lastNameRegex = /^[a-zA-Z\s]*$/;
    return !lastNameRegex.test(this.lastName);
  }
  isPasswordInvalid(): boolean {
    return this.password && this.password.length < 8;
  }
  
  signup() {
    //SENDING USER OBJECT TO SERVER FOR CREATING THIS USER LOGIN 
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.apiService.createUser(user).subscribe(
      response =>{
         console.log('SIGN UP API ( SERVER) : ',response);
         if (response.status === "OK") {
          this.router.navigate(['/login']);
        }
        else{
          this.router.navigate(['/signup']);
        }
      },
      error => console.log(error)
    );
  }
}
