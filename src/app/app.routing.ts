import {NgModule} from '@angular/core';
import {Routes, RouterModule, NoPreloading} from '@angular/router';
import {LayoutComponent} from "./layouts/layout.component";

import {ProjectManagementModule} from "./auth-center/project-management/project-management.module";
import {ProjectListModule} from "./auth-center/project-list/project-list.module";
import {DefaultConfigModule} from "./auth-center/default-config/default-config.module";
import {RoleManagementModule} from "./auth-center/role-management/role-management.module";
import {TeamManagementModule} from "./auth-center/team-management/team-management.module";
import {UserManagementModule} from "./auth-center/user-management/user-management.module";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


export const routes: Routes = [
  // {
  {
    path: '',
    redirectTo: 'auth-center',
    pathMatch: 'full',
  },
  {
    path: 'login/:id',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'auth-center',
    component: LayoutComponent,
    // resolve: { menu: MenuResolverService },
    children:
      [
        {
          /**项目列表*/
          path: '',
          redirectTo: 'project-list',
          pathMatch: 'full'
        }, {
        /** 项目列表*/
        path: 'project-list',
        loadChildren: './auth-center/project-list/project-list.module#ProjectListModule'
      }, {
        /** 默认配置*/
        path: 'default-config',
        loadChildren: './auth-center/default-config/default-config.module#DefaultConfigModule'
      }, {
        /** 项目管理*/
        path: 'project-management',
        loadChildren: './auth-center/project-management/project-management.module#ProjectManagementModule'
      }, {
        /** 角色管理*/
        path: 'role-management',
        loadChildren: './auth-center/role-management/role-management.module#RoleManagementModule'
      }, {
        /** 团队管理*/
        path: 'team-management',
        loadChildren: './auth-center/team-management/team-management.module#TeamManagementModule'
      }, {
        /** 用户管理*/
        path: 'user-management',
        loadChildren: './auth-center/user-management/user-management.module#UserManagementModule'
      }
      ]
  },
  // {
  //     path: 'noLogin',
  //     component : NoLoginErrorComponent,
  // },
  // // {
  // //     path: 'noAuth',
  // //     component : NoAuthErrorComponent,
  // // },
  // {
  //     path: 'notFound',
  //     component: NotFoundErrorComponent
  // },
  // {
  //     path: 'systemError',
  //     component: SystemErrorComponent
  // },
  {
    path: '**',
    redirectTo: 'notFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
