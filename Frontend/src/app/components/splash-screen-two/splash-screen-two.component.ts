import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen-two',
  templateUrl: './splash-screen-two.component.html',
  styleUrls: ['./splash-screen-two.component.css']
})
export class SplashScreenTwoComponent implements OnInit {
  images = [
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
