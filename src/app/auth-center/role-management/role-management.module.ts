import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoleManagementRoutingModule} from './role-management-routing.module';
import {RoleManagementComponent} from "./component/role-management.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PluginsModule} from "../../plugins/plugins.module";
import { DropDownListComponent } from './component/drop-down-list/drop-down-list.component';

@NgModule({
    declarations: [
        RoleManagementComponent,
        DropDownListComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        PluginsModule,
        RoleManagementRoutingModule
    ]
})
export class RoleManagementModule {
}
