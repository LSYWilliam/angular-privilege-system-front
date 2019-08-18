import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './component/user-management.component';
import { PluginsModule } from '../../plugins/plugins.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        UserManagementComponent
    ],
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        PluginsModule
    ]
})
export class UserManagementModule { }
