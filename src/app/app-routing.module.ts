import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginlayoutComponent } from './shared/layouts/loginlayout/loginlayout.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { InnerlayoutComponent } from './shared/layouts/innerlayout/innerlayout.component';
import { AddcourseComponent } from './core/addcourse/addcourse.component';
import { MycoursesComponent } from './core/mycourses/mycourses.component';
import { AllcoursesComponent } from './core/allcourses/allcourses.component';
import { UploadvideosComponent } from './core/uploadvideos/uploadvideos.component';
import { CompletecourseComponent } from './core/completecourse/completecourse.component';

const routes: Routes = [
  {
    path: "", component: LoginlayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**",component: LoginComponent}

    ]
  },
  {
    path: "", component: InnerlayoutComponent,
    children: [
      { path: "addcourse", component: AddcourseComponent },
      { path: "mycourses", component: MycoursesComponent },
      { path: "allcourses", component: AllcoursesComponent },
      { path: "upload", component: UploadvideosComponent },
      { path: "startcourse", component: CompletecourseComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }