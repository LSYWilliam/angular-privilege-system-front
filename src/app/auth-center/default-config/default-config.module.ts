import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule} from '@angular/common';
import { DefaultConfigRoutingModule } from './default-config-routing.module';
import { DefaultConfigComponent } from './component/default-config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluginsModule } from '../../plugins/plugins.module';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        DefaultConfigRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PluginsModule
    ],
    declarations: [
        DefaultConfigComponent
    ],
    entryComponents: [
    ]
})
export class DefaultConfigModule {
}
