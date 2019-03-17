import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-uploadvideos',
  templateUrl: './uploadvideos.component.html',
  styleUrls: ['./uploadvideos.component.css']
})
export class UploadvideosComponent implements OnInit {
  CourseData: any = [];
  formData: any;
  selectedCourse: any = "0";
  messages: any = {};
  showError: boolean = false;
  showSuccess: boolean = false;
  fileList: FileList;
  progress: number;
  message: string;
  @ViewChild('fileUpload') inputFile:ElementRef;
  constructor(private service: PortalService, private http: HttpClient) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    this.service.getCourses("").subscribe((data) => {
      if (data) {
        this.CourseData = data;
        console.log(this.CourseData)
      }
    }, (error) => {
      console.log(error)
    })
  }
  //file upload event  
  fileChange(event) {
    this.fileList = event.target.files;
    // this.formData = new FormData();
    // if (fileList.length > 0) {
    //   let file: File = fileList[0];

    //   this.formData.append('uploadFile', file, file.name);      
    // }
  }
  OnUploadVideos() {

    this.showSuccess = false;
    this.showError = false;
    if (this.selectedCourse !== "0") {
      let formData: FormData = new FormData();
      for (var j = 0; j < this.fileList.length; j++) {
        formData.append("file[]" + j.toString(), this.fileList[j], this.fileList[j].name);
      }
      formData.append("courseId", this.selectedCourse);
      this.service.uploadVideos(formData).subscribe((event) => {
        if (event) {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response)
            this.showSuccess = true;
          this.messages.success = "Files Uploaded successfully.";
          this.reset();
        }
      }, (error) => {
        this.showSuccess = false;
        this.showError = true;
        this.messages.error = "Something went wrong! Please try again."
      })
    }
    else {
      this.showSuccess = false;
      this.showError = true;
      this.messages.error = "Please select a course and try again."
    }
  }
  reset() {
    this.inputFile.nativeElement.value="";
    this.selectedCourse="0";
  }
}
