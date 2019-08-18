import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {RequestArgs} from '../../../shared/model/request-args';
// import {HttpClientService} from '../../../shared/service/httpClient.service';
// import {routerMenuConf} from '../../../shared/menu/routerMenu';
// import {menuConf} from '../../../shared/menu/menu';



/**
 * 顶部菜单布局组件
 * @class HeaderMenuComponent
 */
@Component({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {
    /** 是否退出对话框状态 */
    public isVisible: any;
    public userName: string;
    /**菜单列表 (这个需要后台返回，此处是目前写死)*/
    public menuList=[{
      url:"",name:"数据接入"
    },{
      url:"",name:"数据治理"
    },{
      url:"auth-center",name:"权限中心"
    }];
    public menuList1: any;

    public headerNav: any;
    public routeNav: any;
    public systemMenu: any;

  /**实时监控左侧边栏列表*/
  public menuMonitorList: any;

  /**存储第一次点击的菜单，判断是否前后点击的是同一个横向的导航菜单*/
  public lastTimeMenu: any;
  /**路由菜单*/
  public menuConfData: any;
    constructor(private router: Router) {
      this.menuList=[{
        url:"",name:"数据接入"
      },{
        url:"",name:"数据治理"
      },{
        url:"auth-center",name:"权限中心"
      }];
    //     this.isVisible = false;
    //     this.userName = sessionStorage.getItem('userName');
    //
    //     const menu = sessionStorage.getItem('arr');
    //     this.menuList = JSON.parse(menu).horizontalMenu;
    //
    //     this.headerNav = ['/real-time-monitor', '/network-configuration', '/corporate-center', '/system-settings', '/equipment-manage'];
        const arr = window.location.pathname.split('/');
        console.log(arr);
        this.routeNav =  arr[1];
    //     this.lastTimeMenu = '/' + arr[1];
    //
    //     const arrMenu = sessionStorage.getItem('arrMenu');
    //     this.systemMenu = JSON.parse(arrMenu).horizontalMenu;
    //
    //     /** 获取静态配置数据 */
    //     this.menuConfData = routerMenuConf();
    //
    //   /** 获取静态配置数据 */
    //   const conf = menuConf();
    //   this.menuList1 = conf.realTimeMonitor;
    //
    }
    // /**路由跳转*/
    routeToLink(value) {
      window.location.href=value;
      // this.router.navigateByUrl(value);
      // for (let index = 0; index < value.length; index++ ) {
        // if (value[index].bool === true) {
        //   this.router.navigateByUrl(value[index].url.slice(1));
        //   break;
        // }
      // }
    }
    // routeLink(item) {
    //     const route = item.url;
    //     this.routeNav = route;
    //     if (this.lastTimeMenu !== route) {
    //       switch (route) {
    //         case '/real-time-monitor':
    //           this.menuMonitorList = this.menuConfData.realTimeMonitor;
    //           break;
    //         case '/network-configuration':
    //           this.menuMonitorList = this.menuConfData.networkConfiguration;
    //           break;
    //         case '/corporate-center':
    //           this.menuMonitorList = this.menuConfData.corporateCenter;
    //           break;
    //         case '/system-settings':
    //           this.menuMonitorList = this.menuConfData.systemSettings;
    //           break;
    //         case '/equipment-manage':
    //           this.menuMonitorList = this.menuConfData.equipmentManage;
    //           break;
    //       }
    //
    //       for (let item of this.systemMenu) {
    //         for (let index = 0; index < this.menuMonitorList.length; index++ ) {
    //           if (item === this.menuMonitorList[index].anotherName) {
    //             this.menuMonitorList[index].bool = true;
    //           }
    //         }
    //       }
    //       const arrMenuObj2 = {
    //         horizontalMenu: this.menuMonitorList
    //       };
    //       sessionStorage.setItem('arrLeftMenu', JSON.stringify(arrMenuObj2));
    //       this.routeToLink(this.menuMonitorList);
    //     }
    //
    //     this.lastTimeMenu = route;
    //  }
    ngOnInit() {
      // if (!this.routeNav) {
      //   this.routeNav = this.headerNav[0];
      // }
    }
}
