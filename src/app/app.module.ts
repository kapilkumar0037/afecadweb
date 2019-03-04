import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
    PaymentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
