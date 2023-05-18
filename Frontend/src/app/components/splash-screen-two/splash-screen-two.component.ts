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
    '/assets/person4.jpg',
    '/assets/person4.jpg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/person4.jpg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/man.jpeg',
    '/assets/person4.jpg',
    '/assets/person4.jpg',
  ];
  constructor(private router : Router) { }

  ngOnInit(): void {
    if('token' in localStorage) {
     this.router.navigate(['/home']);
  }
  else{
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
  }

}
