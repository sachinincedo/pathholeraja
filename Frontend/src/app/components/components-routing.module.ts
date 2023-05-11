import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//    {
//     path:'',
//     component: HomeComponent
//    },
//     {
//       path:'login',
//       component: LoginComponent
//     },
//     {
//       path:'signup',
//       component: SignupComponent
//     },
//     {
//       path:'report-pothole',
//       component: ReportPotholeComponent
//     },
//     {
//       path:'status-pothole',
//       component: StatusPotholeComponent
//     }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ComponentsRoutingModule { }