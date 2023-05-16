import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variables Declared 
    email: string='';
    password: string='';
    text : string='';
    @ViewChild('myForm') myForm!: NgForm;

    constructor(private apiService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
 // Login Button Function 
  login(){
      let loginDetails = {
        email: this.email,
        password: this.password
      };
      this.apiService.loginUser(loginDetails).subscribe(
        (response) =>{
           console.log('LOGIN API Response (SERVER)',response);
            if (response.status === "OK") {
                this.router.navigate(['/home']);
                // Getting USER ID of User stored in Local
                localStorage.setItem('user', response.userId);
            }
            else{
                 this.text = response.message;
                 this.myForm.reset();   
            }
        },
        error => console.log(error)
      );
      //reseting login feilds
     
  }

}
