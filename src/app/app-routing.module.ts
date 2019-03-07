import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginlayoutComponent } from './shared/layouts/loginlayout/loginlayout.component';
import { LoginComponent } from './shared/login/login.component';
import { CompletecourseComponent } from './core/completecourse/completecourse.component';
import { InnerlayoutComponent } from './shared/layouts/innerlayout/innerlayout.component';
import { AddcourseComponent } from './core/addcourse/addcourse.component';
import { MycoursesComponent } from './core/mycourses/mycourses.component';
import { AllcoursesComponent } from './core/allcourses/allcourses.component';
import { UploadvideosComponent } from './core/uploadvideos/uploadvideos.component';
import { SelectcourseComponent } from './shared/registration/selectcourse/selectcourse.component';
import { BasicdetailsComponent } from './shared/registration/basicdetails/basicdetails.component';
import { PaymentdetailsComponent } from './shared/registration/paymentdetails/paymentdetails.component';
import { WatchComponent } from './core/watch/watch.component';

const routes: Routes = [
  {
    path: "", component: LoginlayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "basicdetails", component: BasicdetailsComponent },
      { path: "selectcourse", component: SelectcourseComponent },
      { path: "paymentdetails", component: PaymentdetailsComponent },
      // { path: "**",component: LoginComponent}

    ]
  },
  {
    path: "", component: InnerlayoutComponent,
    children: [
      { path: "addcourse", component: AddcourseComponent },
      { path: "mycourses", component: MycoursesComponent },
      { path: "allcourses", component: AllcoursesComponent },
      { path: "upload", component: UploadvideosComponent },
      { path: "startcourse", component: WatchComponent }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
