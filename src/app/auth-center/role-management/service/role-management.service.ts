import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {RequestArgs} from "../../../shared/model/request-args";
import {HttpClientService} from "../../../shared/service/httpClient.service";

@Injectable()
export class RoleManagementService {
    public requestArgs:RequestArgs = new RequestArgs();
    public roleList:Array<any>;
    isShow=[];
    isClicked;
    constructor(private http: HttpClientService,public renderer: Renderer2, public elementRef: ElementRef) {
        this.getRoleListData();
    }

    getRoleListData() {
        this.requestArgs.systemName = 'test';
        // this.requestArgs.body = {};
        this.requestArgs.header = {'Content-Type':'application/json'};
        this.requestArgs.url = '/assets/data/api/role-management/list.json';
        this.http.httpGet(this.requestArgs).subscribe(res=> {
            console.log(res);
            let i=2;
            res.result.forEach(glt=> {
                this.isShow[i++]=true;
            });
            this.roleList=res.result;

            console.log(this.roleList);
        });
    }
}
