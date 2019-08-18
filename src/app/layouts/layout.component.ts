import {Component, OnInit} from '@angular/core';
import {MenuModel} from "./model/menu.model";
import {Router} from "@angular/router";
import {HttpClientService} from "../shared/service/httpClient.service";
import {RequestArgs} from "../shared/model/request-args";

/**
  * 布局组件
  * @class LayoutComponent
*/
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

    public menuList : MenuModel = new MenuModel();
    public routeNav: any;
    public leftMenuList: any;

    public visible = false;
    public isCollapsed = true;
    public requestArgs = new RequestArgs();
    constructor(private router: Router,private http: HttpClientService) {
      const arr = window.location.pathname.split('/');
      console.log(arr);
      this.routeNav =  arr[1]+"/"+(arr[2]?arr[2]:"");
      this.getLeftMenuList();
        // activatedRoute.data.subscribe(
        //     ( data:{menu: any} ) => {
        //         if (data.menu['code'] === 0) {
        //             data.menu['result'].forEach(
        //                 val => {
        //                     if(this.menuList[val] != undefined)
        //                     {
        //                         this.menuList[val][0] = true;
        //                     }
        //                 }
        //             );
        //         }
        //     }
        // );
    }
  routeToLink(value) {
    this.router.navigateByUrl(value);
  }

  getLeftMenuList() {
      this.requestArgs.systemName = 'test';
      // this.requestArgs.body = {};
      this.requestArgs.header = {'Content-Type':'application/json'};
      this.requestArgs.url = '/assets/data/api/layout/list.json';
      this.http.httpGet(this.requestArgs).subscribe(res=> {
        console.log(res);
        this.leftMenuList=res.result;
      });
  }
  mouseover() {
        this.isCollapsed = false;
    }

    mouseout() {
        this.isCollapsed = true;
    }

    ngOnInit() {}
}



