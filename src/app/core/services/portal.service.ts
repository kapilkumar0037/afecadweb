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
    return this.restService.postApiReq(AppSettings.Studentcontroller, AppSettings.getCourses, data).pipe(map(res => {
      return res;
    }));
  }

}
