import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginurl = 'http://3.223.95.128:8080/api/v1/login';
  private homeurl = 'http://3.223.95.128:8080/api/v1/home';
  private reportpothole = 'http://3.223.95.128:8080/api/v1/potholes/report';
  private statusurl = 'http://3.223.95.128:8080/api/v1/home/status';
  
  constructor(private http: HttpClient) { }

  loginUser(user:any): Observable<any> {
    return this.http.post(this.loginurl, user);
  }
  
  homeData(): Observable<any>{
    let userId=localStorage.getItem('user')
    const url = `${this.homeurl}?userId=${userId}`;
    return this.http.get(url);
  }

  reportPothole(data:any): Observable<any>{
    return this.http.post(this.reportpothole,data);
  } 

  statuspothole(): Observable<any>{
    let userId=localStorage.getItem('user')
    const url = `${this.statusurl}?userId=${userId}`;
    return this.http.get(url);
  }
}
