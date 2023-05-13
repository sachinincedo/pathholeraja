import { Component, OnInit } from '@angular/core';
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
  password: string='';
  constructor(private apiService: SignupService,private router: Router) { }
  ngOnInit(): void {
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
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/login']);
        }
      },
      error => console.log(error)
    );
  }
}
