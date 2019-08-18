import { NgModule } from '@angular/core';
import { FormTitleComponent } from './component/form-title/form-title.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UseModelComponent } from './component/use-model/use-model.component';
import { CityLinkComponent } from './component/city-link/city-link.component';
import { PsTableComponent } from './component/ps-table/ps-table.component';

@NgModule({
  declarations: [
    FormTitleComponent,
    UseModelComponent,
    CityLinkComponent,
    PsTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    FormTitleComponent,
    UseModelComponent,
    CityLinkComponent,
    PsTableComponent
  ],
  providers: []
})
export class PluginsModule { }
