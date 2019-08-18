import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectManagementComponent} from "./component/project-management.component";
import {ProjectManagementRoutingModule} from "./project-management-routing.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PluginsModule} from "../../plugins/plugins.module";
import { AddressLinkComponent } from './component/address-link/address-link.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ProjectManagementComponent,
        AddressLinkComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        PluginsModule,
        FormsModule,
        ReactiveFormsModule,
        ProjectManagementRoutingModule
    ],
    exports: [
        AddressLinkComponent
    ]
})
export class ProjectManagementModule {
}
