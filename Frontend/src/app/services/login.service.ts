import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginurl = 'http://localhost:8080/api/v1/login';
  private homeurl = 'http://localhost:8080/api/v1/home';
  private reportpothole = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  loginUser(user: any): Observable<any> {
    console.log(user);
=======
  loginUser(user:any): Observable<any> {
>>>>>>> fb6e8b94287709115830778b3ee37f4ac37fec44
    return this.http.post(this.loginurl, user);
  }
  homeData(): Observable<any>{
    return this.http.get(this.homeurl);
  }
  reportPothole(data:any): Observable<any>{
    return this.http.post(this.reportpothole,data);
  }
}
