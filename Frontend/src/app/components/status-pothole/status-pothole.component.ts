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
  showMore(){
    this.showCountOfPost += 5;
  }
  // items = [
   
  //   // { id: 6, status: 'Not Started', Pincode: '677337' , ReportedOn:'09/02/2023' },
  //   // { id: 7, status: 'WIP', Pincode: '107337' , ReportedOn:'08/02/2023' },
  //   // { id: 8, status: 'Fixed', Pincode: '507337' , ReportedOn:'07/02/2023' },
  //   { ticketId: 9, status: 'FIXED', pincode: '507337' , creationDateTime:'07/02/2023' },
  // ];

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

}
