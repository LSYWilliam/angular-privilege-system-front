import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppConfig} from "./app.config";
import {LayoutComponent} from "./layouts/layout.component";
import {HeaderLayoutComponent} from "./layouts/header-layout/header-layout.component";
import {PluginsModule} from "./plugins/plugins.module";
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {AppRoutingModule} from "./app.routing";
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RouterModule} from "@angular/router";
import {HeaderMenuComponent} from "./layouts/header-menu/header-menu.component";
import {HttpClientService} from "./shared/service/httpClient.service";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderLayoutComponent,
    HeaderMenuComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    PluginsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
    AppConfig,HttpClientService,
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
