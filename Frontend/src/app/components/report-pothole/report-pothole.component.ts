import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private apiService : LoginService,private sanitizer: DomSanitizer) { }
  // @ViewChild('fileUpload') fileUpload: any;
  // fileName = 'No file chosen';
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.fileName = file.name;
  // }
  ngOnInit(): void {    
  }
  reportPothole(){
    // const data = {
    //    location:
    //       {
    //         crossRoad1: this.crossRoad1,
    //         crossRoad2: this.crossRoad2,
    //         additionalDesc: this.additionalDesc,
    //         atlocation: this.atlocation,
    //       }
    // };
    // console.log('Data Report',data);
    // this.apiService.reportPothole(data).subscribe(
    //   response =>{
    //      console.log('Report Response',response);
    //   },
    //   error => console.log(error)
    // );
  }

  file!: File;
  
//base64
imgBase64: string = '';
  
//json to send 
postData = {};

// used to show image in html
imagePath: any;


public onSelectFile(event: any) {
  let fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    this.file = fileList[0];

    this.handleFileInputChange(this.file); //turn into base64
  } else {
    this.imagePath = undefined;
    alert("No file selected");
  }
}


handleFileInputChange(files: any) {
  let file = files, pattern = /image-*/;

  if (!file.type.match(pattern)) {
    alert('invalid format');
    return;
  }

  let reader = new FileReader();
  reader.onloadend = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}

_handleReaderLoaded(e: any) {
  let reader = e.target;
  this.imgBase64 = reader.result;

  // set and show image from base64
  this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(this.imgBase64);
}

submitForm() {
 let Data = {
    "photoData": this.imgBase64,
    "photoName" : this.file.name,
    "id": localStorage.getItem('user'),
    "location":
    {
      crossRoad1: this.crossRoad1,
      crossRoad2: this.crossRoad2,
      additionalDescription: this.additionalDesc,
      // atlocation: this.atlocation,
    }
  }

  console.log("Data : ", Data);

  console.log('Image ',this.imgBase64);
  this.apiService.reportPothole(Data).subscribe(
    response =>{
       console.log('Report Response',response);
    },
    error => console.log(error)
  );
}
}
