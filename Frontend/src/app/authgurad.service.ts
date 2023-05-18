import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradService {
  private loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  logout() { 
    this.loggedIn = false;
    if('token' in localStorage) {
        localStorage.removeItem('token');
    }
    if('user' in localStorage) {
        localStorage.removeItem('user');
    }
  }

  isLoggedIn() {
   if(localStorage.getItem('token')) {
    this.loggedIn = true;
   }
    return this.loggedIn;
  }
}
