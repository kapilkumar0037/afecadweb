import { Injectable } from '@angular/core';
import { DatabaseOperationsService } from '../../shared/services/database-operations.service';
import { AppSettings } from '../../shared/app.settings';
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' 
})
export class PortalService {

  constructor(private restService: DatabaseOperationsService) { }

  saveBasicDetails(data) {
    return this.restService.postApiReq(AppSettings.Studentcontroller, AppSettings.SaveStudentDetails, data).pipe(map(res => {
      return res;
    }));
  }
  getCourses(data) {
    return this.restService.postApiReq(AppSettings.AdminController, AppSettings.getCourses, data).pipe(map(res => {
      return res;
    }));
  }
  addCourse(data) {
    return this.restService.postApiReq(AppSettings.AdminController, AppSettings.AddCourse, data).pipe(map(res => {
      return res;
    }));
  }
  saveCourses(data) {
    return this.restService.postApiReq(AppSettings.Studentcontroller, AppSettings.saveCourses, data).pipe(map(res => {
      return res;
    }));
  }
  getCountries(data) {
    return this.restService.postApiReq(AppSettings.SetupController, AppSettings.getCountries, data).pipe(map(res => {
      return res;
    }));
  }
  uploadVideos(data) {
    return this.restService.postReqContext(AppSettings.AdminController, AppSettings.UploadFiles, data).pipe(map(res => {
      return res;
    }));
  }
  getCourseVideos(data) {
    return this.restService.postApiReq(AppSettings.AdminController, AppSettings.GetCourseVideosById, data).pipe(map(res => {
      return res;
    }));
  }
  GetRegistraionData(data) {
    return this.restService.postApiReq(AppSettings.AdminController, AppSettings.GetRegistraionData, data).pipe(map(res => {
      return res;
    }));
  }
  approveUser(data) {
    return this.restService.postApiReq(AppSettings.AdminController, AppSettings.ApproveUser, data).pipe(map(res => {
      return res;
    }));
  }
  SavePaymentDetails(data) {
    return this.restService.postReqContext(AppSettings.Studentcontroller, AppSettings.UploadImage, data).pipe(map(res => {
      return res;
    }));
  }
}
