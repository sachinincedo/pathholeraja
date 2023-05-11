import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string='';
  constructor(private apiService: LoginService) { }

  ngOnInit(): void {
  }
 
  login(){
      const user = {
        email: this.email,
        password: this.password
      };
      console.log('User',user);
      this.apiService.loginUser(user).subscribe(
        response =>{
           console.log('LOGIN Response',response);
        },
        error => console.log(error)
      );
    
  }

}
