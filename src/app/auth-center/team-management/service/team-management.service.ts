import {Injectable} from '@angular/core';
import {HttpClientService} from "../../../shared/service/httpClient.service";
import {FormBuilder} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd";
import {RequestArgs} from "../../../shared/model/request-args";

@Injectable()
export class TeamManagementService {
    public requestArgs: RequestArgs = new RequestArgs();
    public memberItemList: Array<any>;
    public isSaveFlag: Array<boolean> = [];

    constructor(private http: HttpClientService, public msg: NzMessageService, public fb: FormBuilder) {
        this.getProjectMemberItemListData();
    }

    getProjectMemberItemListData() {
        this.requestArgs.systemName = 'test';
        // this.requestArgs.body = {};
        this.requestArgs.header = {'Content-Type': 'application/json'};
        this.requestArgs.url = '/assets/data/api/project-management/projectMemberlist.json';
        this.http.httpGet(this.requestArgs).subscribe(res => {
            console.log(res);
            res.result.forEach(glt => {
                glt.memberListString = glt.memberList.join("/");
                this.isSaveFlag[glt.id]=true;
            });
            this.memberItemList = res.result;

            console.log(this.memberItemList);
        });
    }
}
