import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private location: Location,
    private router : Router) { }

  ngOnInit(): void {
  }
  backButton() {
    this.location.back();
  }
  logout(){
    console.log('Logout Called');
    localStorage.removeItem('mobileNumber');
    this.router.navigate(['/login']);

  }
}
