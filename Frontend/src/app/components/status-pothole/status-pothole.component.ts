import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { ApiResponse } from '../models';

@Component({
  selector: 'app-status-pothole',
  templateUrl: './status-pothole.component.html',
  styleUrls: ['./status-pothole.component.css']
})
export class StatusPotholeComponent implements OnInit {
  public showCountOfPost = 5;
  items: any[] = [];
  constructor(private apiService : LoginService) { }

  ngOnInit(): void {
    this.apiService.statuspothole().subscribe(
   (response: ApiResponse[]) =>{
         console.log('STATUS API RESPONSE :( SERVER) ',response);
         this.items=response;     
      },
      error => console.log(error)
    );
  }
  showMore(){
    this.showCountOfPost += 5;
  }

}
