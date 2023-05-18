import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Variables Declaration 
  TotalPotHoleReported:any = 0;
  PotholeIReported: any= 0 ;

  constructor(private apiService: LoginService,private router : Router) { }

  ngOnInit(): void {
    // HOME API CALLED ON EACH REFRESH OF PAGE 
    this.apiService.homeData().subscribe(
      data => {
        console.log('HOME API ( SERVER RESPONSE )', data);
        this.TotalPotHoleReported = data.totalPotholeReported;
        this.PotholeIReported = data.potholeIreport;
      },
      error => {
        console.log(error);
      }
    );
  }




}
