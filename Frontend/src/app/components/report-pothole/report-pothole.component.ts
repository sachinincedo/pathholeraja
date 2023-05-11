import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-report-pothole',
  templateUrl: './report-pothole.component.html',
  styleUrls: ['./report-pothole.component.css']
})
export class ReportPotholeComponent implements OnInit {
  crossRoad1: string='';
  crossRoad2: string='';
  additionalDesc: string='';
  atlocation: boolean=false;

  constructor(private apiService : LoginService) { }
  @ViewChild('fileUpload') fileUpload: any;
  fileName = 'No file chosen';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file.name;
  }
  ngOnInit(): void {    
  }
  reportPothole(){
    const data = {
       location:
          {
            crossRoad1: this.crossRoad1,
            crossRoad2: this.crossRoad2,
            additionalDesc: this.additionalDesc,
            atlocation: this.atlocation,
          }
    };
    console.log('Data Report',data);
    this.apiService.reportPothole(data).subscribe(
      response =>{
         console.log('Report Response',response);
      },
      error => console.log(error)
    );
  }
}
