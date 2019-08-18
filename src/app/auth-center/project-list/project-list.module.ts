import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent } from './component/project-list.component';
import { CommonModule } from '@angular/common';
import { ProjectListService } from './service/project-list.service';
import { PluginsModule } from '../../plugins/plugins.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ProjectListRoutingModule,
        PluginsModule
    ],
    declarations: [
        ProjectListComponent
    ],
    entryComponents: [
    ],
    providers: [
        ProjectListService
    ]
})
export class ProjectListModule {
}
