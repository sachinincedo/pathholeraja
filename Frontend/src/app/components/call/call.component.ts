import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
    number = localStorage.getItem('mobileNumber');
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backButton() {
    localStorage.removeItem('mobileNumber');
        this.location.back();
  }
}
