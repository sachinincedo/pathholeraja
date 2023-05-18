import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuradService } from 'src/app/authgurad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openHeader: boolean = false;

  constructor(private authGuardService: AuthGuradService,
              private router: Router)
  { }

  ngOnInit(): void {  
  }

  logoutSession() {
    this.router.navigate(['/login'], {replaceUrl: true});
    this.authGuardService.logout();
  }

}
