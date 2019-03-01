import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginlayoutComponent } from './shared/layouts/loginlayout/loginlayout.component';
import { InnerlayoutComponent } from './shared/layouts/innerlayout/innerlayout.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { MycoursesComponent } from './core/mycourses/mycourses.component';
import { AllcoursesComponent } from './core/allcourses/allcourses.component';
import { AddcourseComponent } from './core/addcourse/addcourse.component';
import { UploadvideosComponent } from './core/uploadvideos/uploadvideos.component';
import { CompletecourseComponent } from './core/completecourse/completecourse.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginlayoutComponent,
    InnerlayoutComponent,
    LoginComponent,
    RegisterComponent,
    MycoursesComponent,
    AllcoursesComponent,
    AddcourseComponent,
    UploadvideosComponent,
    CompletecourseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
