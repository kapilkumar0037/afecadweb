import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginlayoutComponent } from './shared/layouts/loginlayout/loginlayout.component';
import { InnerlayoutComponent } from './shared/layouts/innerlayout/innerlayout.component';
import { LoginComponent } from './shared/login/login.component';
import { MycoursesComponent } from './core/mycourses/mycourses.component';
import { AllcoursesComponent } from './core/allcourses/allcourses.component';
import { AddcourseComponent } from './core/addcourse/addcourse.component';
import { UploadvideosComponent } from './core/uploadvideos/uploadvideos.component';
import { CompletecourseComponent } from './core/completecourse/completecourse.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SelectcourseComponent } from './shared/registration/selectcourse/selectcourse.component';
import { BasicdetailsComponent } from './shared/registration/basicdetails/basicdetails.component';
import { PaymentdetailsComponent } from './shared/registration/paymentdetails/paymentdetails.component';
import { TokenHttpInterceptor } from './shared/interceptors/http-interceptor';
import { AppConfig } from './shared/app.config';
import { AppSettings } from './shared/app.settings';
import { Global } from './shared/global';
import { StaticData } from './shared/static.data';
import { UserService } from './shared/services/user/user.service';
import { LoaderService } from './shared/services/loader.service';
import { WatchComponent } from './core/watch/watch.component';
import { CourseViewComponent } from './core/course-view/course-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginlayoutComponent,
    InnerlayoutComponent,
    LoginComponent,
    MycoursesComponent,
    AllcoursesComponent,
    AddcourseComponent,
    UploadvideosComponent,
    CompletecourseComponent,
    NavigationComponent,
    SelectcourseComponent,
    BasicdetailsComponent,
    PaymentdetailsComponent,
    WatchComponent,
    CourseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    AppConfig,
    AppSettings,
    Global,
    StaticData,
    UserService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
