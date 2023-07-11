import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() phoneSelected : boolean = false;
  @Input() settingSelected : boolean = false;
  @Input() contactSelected : boolean = false;
  @Input() numberSelected : boolean = false;
  constructor(private router : Router) { } 
  ngOnInit(): void {
  }

}
