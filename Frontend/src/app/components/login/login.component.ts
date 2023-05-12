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
      const user = {
        email: this.email,
        password: this.password
      };
      console.log('User',user);
      this.apiService.loginUser(user).subscribe(
        response =>{
           console.log('LOGIN Response',response);
           
            if (response.status === 200) {
              this.router.navigate(['/home']);
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
