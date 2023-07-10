import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  private loginurl = 'http://localhost:8080/fp/api/presignup/login';
  // private signupurl = 'https:signup/v1';
  private verifyphoneurl = 'http://localhost:8080/fp/api/presignup/verify';
  private otpverify = 'http://localhost:8080/fp/api/presignup/confirm';
  private profileurl = 'http://localhost:8080/fp/api/presignup/signup';
  private resendotp = 'http://localhost:8080/fp/api/presignup/verify';
  // private permissionurl = 'https:verify/br';

  constructor(private http: HttpClient) { }

  loginUser(LoginDetails:any): Observable<any> {
    return this.http.post(this.loginurl, LoginDetails);
  }
  // signUpUser(SignupDetails: any) : Observable<any>{
  //   return this.http.post(this.signupurl,SignupDetails);
  // }

  resendOtp(resendotp:any):Observable<any>{
    return this.http.post(this.resendotp,resendotp);
  }
  verifyPhoneNumber(PhoneNumber : any ): Observable<any>{
    return this.http.post(this.verifyphoneurl,PhoneNumber);
  }
  otpVerification(otp : any) : Observable<any>{
    return this.http.post(this.otpverify,otp);
  }
  profile(ProfileDetails: any): Observable<any>{
    return this.http.post(this.profileurl,ProfileDetails);
  }
  // permission(permissionAccess : any) : Observable<any>{
  //   return this.http.post(this.permissionurl,permissionAccess);
  // }
}
