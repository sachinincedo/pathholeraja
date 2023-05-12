import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string='';
  text : string='error message';
  constructor(private apiService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
 
  login(){
      let user = {
        email: this.email,
        password: this.password
      };
      console.log('User',user.email);
      this.apiService.loginUser(user).subscribe(
        response =>{
           console.log('LOGIN Response',response);
           
            if (response.status === "OK") {
              this.router.navigate(['/home']);
              localStorage.setItem('user', response.userId);
            }
            else{
              this.text=response.message;
              // this.router.navigate(['/login']);
            }
        },
        error => console.log(error)
      );
    
  }

}
