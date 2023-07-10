import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incoming-call',
  templateUrl: './incoming-call.component.html',
  styleUrls: ['./incoming-call.component.css']
})
export class IncomingCallComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
   callCut(){
    console.log('Call cut clicked');
       this.router.navigate(['/loggedin/call'])
   }
}
