import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dial-pad',
  templateUrl: './dial-pad.component.html',
  styleUrls: ['./dial-pad.component.css']
})
export class DialPadComponent implements OnInit {
  dialpadButtons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

 
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backButton() {
    this.location.back();
  }
}
