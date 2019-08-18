import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleManagementComponent} from "./component/role-management.component";

const routes: Routes = [
  {
    path: '',
    component: RoleManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleManagementRoutingModule { }
