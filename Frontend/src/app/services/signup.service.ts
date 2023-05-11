import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
   private baseUrl = 'http://localhost:8080/api/v1/signup';

   constructor(private http: HttpClient) { }
 
   createUser(user: any): Observable<any> {
     return this.http.post(this.baseUrl, user);
   }
}
