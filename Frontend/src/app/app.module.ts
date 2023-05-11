import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SplashScreenTwoComponent } from './components/splash-screen-two/splash-screen-two.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReportPotholeComponent } from './components/report-pothole/report-pothole.component';
import { StatusPotholeComponent } from './components/status-pothole/status-pothole.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
    SignupComponent,
    SplashScreenTwoComponent,
    HomeComponent,
    HeaderComponent,
    ReportPotholeComponent,
    StatusPotholeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './components/home/home.component';
// import { HeaderComponent } from './components/header/header.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     HeaderComponent
//   ],
//   imports: [AppRoutingModule, CommonModule, HttpClientModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
