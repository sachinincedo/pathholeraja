import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login/login.component';
import { CommoncomponentsModule } from '../commoncomponents/commoncomponents.module';
import { SignupComponent } from './signup/signup.component';
import { PhoneVerifyComponent } from './phone-verify/phone-verify.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { ProfileComponent } from './profile/profile.component';
import { PermissionComponent } from './permission/permission.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PhoneVerifyComponent,
    OtpVerifyComponent,
    ProfileComponent,
    PermissionComponent
    ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    CommoncomponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginSignupModule { }
