import { Component, OnInit } from '@angular/core';
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
  constructor(private apiService: SignupService) { }
  ngOnInit(): void {
  }
  signup() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.apiService.createUser(user).subscribe(
      response =>{
         console.log('SIGN UP RESPONSE : ',response);
      },
      error => console.log(error)
    );
  }
}
