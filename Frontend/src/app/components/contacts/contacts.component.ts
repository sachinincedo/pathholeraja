import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [
    { name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' },
    {name: 'Debbie Schmidt', phone: '(867) 322-1852', image: 'http://demos.themes.guide/bodeo/assets/images/users/w104.jpg' }

    // Add more contacts here
  ];
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backButton() {
    this.location.back();
  }
}
