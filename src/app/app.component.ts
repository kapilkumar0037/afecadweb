import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { map } from 'rxjs/internal/operators';
//import { delay } from 'rxjs/add/operator/delay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'afecadweb';
  loading: boolean=false;
  constructor(private loaderService:LoaderService){
    this.loaderService.getHttpStatus().pipe(data=>data).subscribe((status: boolean) => {
      this.loading = status;
    });
  }

  
}
