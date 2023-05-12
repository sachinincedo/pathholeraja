import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3000);
  }

}
