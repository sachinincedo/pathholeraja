import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  bootstrap: [AppComponent]
})
export class AppModule { }