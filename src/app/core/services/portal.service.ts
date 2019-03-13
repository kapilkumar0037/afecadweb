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
}
