/**登录表单 组件*/
import {NgModule} from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {HttpClientService} from "./service/httpClient.service";

@NgModule({
  imports:
    [NgZorroAntdModule],
  declarations:
    [HttpClientService],
  exports:
    [],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  entryComponents: [],
})

/** 共享模块 */
export class SharedModule {
}
