import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outgoing-call',
  templateUrl: './outgoing-call.component.html',
  styleUrls: ['./outgoing-call.component.css']
})
export class OutgoingCallComponent implements OnInit {
    muteSelected : boolean = false;
    speakerSelected : boolean = false;
    dialSelected : boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  mute(){
    this.muteSelected= !this.muteSelected;
  }
  speaker(){
    this.speakerSelected= !this.speakerSelected;
  }
  dialpad()
  {
    this.dialSelected= !this.dialSelected;
  }
  callCut(){
    console.log('Call cut clicked');
       this.router.navigate(['/loggedin/call'])
   }
}
