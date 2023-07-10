import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PhoneVerifyComponent } from './phone-verify/phone-verify.component';
import { PermissionComponent } from './permission/permission.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login'
  },
  {
    path:'login',
    component: LoginComponent
  },
  // {
  //   path:'signup',
  //   component:SignupComponent
  // },
  {
    path:'otp-verify',
    component: OtpVerifyComponent
  },
  {
    path:'phone-verify',
    component: PhoneVerifyComponent
  },
  {
    path:'permission',
    component: PermissionComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'*',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignupRoutingModule { }
