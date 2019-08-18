import { Component, OnInit } from '@angular/core';
import { DefaultConfigService } from '../service/default-config.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { DefaultConfigModel } from '../model/defaultConfig.model';
declare let require: any;

@Component({
  selector: 'app-default-config',
  templateUrl: './default-config.component.html',
  styleUrls: ['./default-config.component.scss']
})
export class DefaultConfigComponent implements OnInit {

    public validateForm: FormGroup;
    public formTitle: Array<string> = [];
    public noRegistered: any[] = [];
    public useModel: Array<any> = [];
    public defaultConfigData: DefaultConfigModel = new DefaultConfigModel();

    submitForm(): void {
        const validate = this.validate();
        if (!validate) {
            console.log(this.defaultConfigData);
        }
    }

    // 判断表单是否输入完成
    validate() {
        let status: boolean = false;
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
            this.validateForm.controls[ i ].updateValueAndValidity();
            if (this.validateForm.controls[ i ].invalid) {
                status = true;
            }
        }
        return status;
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.defaultConfigData = this.getDefaultConfigData();

        this.validateForm = this.fb.group({
            registered: [null, [Validators.required]],
            project: [null, [Validators.required]],
            invitableMember: [null, [Validators.required]],
            validityPeriod: [null, [Validators.required]],
            moduleAvailable: [this.defaultConfigData.moduleAvailable, [Validators.required]],
        });

        this.noRegistered = [
            {'value': true, 'label': '是'},
            {'value': false, 'label': '否'},
        ]

        this.formTitle = [
            '是否开放注册',
            '可见项目',
            '可邀成员',
            '项目有效期',
            '可使用模块'
        ];
    }

    getDefaultConfigData() {
        const Mock = require('mockjs');
        const data = Mock.mock({
            'registered|1-3': false,
            'project|1-100': 100,
            'invitableMember|1-100': 100,
            'validityPeriod|1-100': 100,
            'moduleAvailable|2-5': [
                {
                    'id|+1': 1,
                    'name|1': ['数据接入', '数据处理', '权限管理', '权限中心', '用户管理'],
                    'select|1-2': true
                }
            ]
        })
        return data;
    }
}
