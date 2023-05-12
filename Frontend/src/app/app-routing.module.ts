import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReportPotholeComponent } from './components/report-pothole/report-pothole.component';
import { StatusPotholeComponent } from './components/status-pothole/status-pothole.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SplashScreenTwoComponent } from './components/splash-screen-two/splash-screen-two.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/splashscreen',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'report-pothole',
    component: ReportPotholeComponent
  },
  {
    path:'status-pothole',
    component: StatusPotholeComponent
  },
  {
    path:'splashscreen',
    component: SplashScreenComponent
  },
  {
    path:'splashscreen2',
    component:SplashScreenTwoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
