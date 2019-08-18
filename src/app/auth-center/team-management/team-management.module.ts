import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamManagementRoutingModule} from './team-management-routing.module';
import {TeamManagementComponent} from "./component/team-management.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        TeamManagementComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        TeamManagementRoutingModule
    ]
})
export class TeamManagementModule {
}
