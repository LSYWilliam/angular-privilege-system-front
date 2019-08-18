import { Component, OnInit } from '@angular/core';
import {ProjectManagementService} from "../service/project-management.service";
import {count} from "rxjs/internal/operators";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent extends ProjectManagementService implements OnInit {


    initLoading = true; // bug
    loadingMore = false;
    // data: any[] = [];
    list: Array<{ loading: boolean; name: any }> = [];
    searchValue: string;
    validateForm: FormGroup;
    validateAddMemberFromProjectForm: FormGroup;
    validateAddMemberByEmailForm: FormGroup;
    province;
    city;
    county;
    addressed;
    isAddProject: boolean;
    editProject;
    roleLabelList: Array<{label:string,value:string}> = [];

    controlArray: Array<{ id: number; controlInstance: string;id2: number;controlInstance2: string; }> = [];
    emailControlArray: Array<{ id: number; controlInstance: string;id2: number;controlInstance2: string; }> = [];

    ngOnInit(): void {
        this.roleLabelList.push({label:"拥有者",value:"拥有者"});
        this.roleLabelList.push({label:"访客",value:"访客"});
        // this.data = this.data;
        console.log(this.data);
        this.addressed="qwdwqdqwd";
        this.province="江苏省";
        this.city="南京市";
        this.county="雨花台区";
        this.list = this.data;
        this.initLoading = false;
        let phoneValidators = /^[1][3-9][0-9]{9}$/;
        this.validateForm = this.fb.group({
            projectName: [null, [Validators.required]],
            headName: [null, [Validators.required]],
            address: [null, [Validators.required]],
            type: [null, [Validators.required]],
            mark: [null, [Validators.required]],
            phone: [null, [Validators.required,Validators.minLength(11),Validators.maxLength(11), Validators.pattern(phoneValidators)]]
        });
        this.validateAddMemberFromProjectForm = this.fb.group({});
        this.validateAddMemberByEmailForm = this.fb.group({});
        this.controlArray.push({
            id:0,
            controlInstance: `member0`,
            id2:10000,
            controlInstance2: `role10000`
        });
        this.emailControlArray.push({
            id:20000,
            controlInstance: `emailMember20000`,
            id2:30000,
            controlInstance2: `emailRole30000`
        });
        this.validateAddMemberFromProjectForm.addControl(
            this.controlArray[0].controlInstance,
            new FormControl(null, Validators.required)
        );
        this.validateAddMemberFromProjectForm.addControl(
            this.controlArray[0].controlInstance2,
            new FormControl(null, Validators.required)
        );
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[0].controlInstance,
            new FormControl(null, Validators.required)
        );
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[0].controlInstance2,
            new FormControl(null, Validators.required)
        );
        // {
        //     name: [null, [Validators.required]],
        //         role: [null, [Validators.required]]
        // }
    }

    // onLoadMore(): void {
    //     this.loadingMore = true;
    //     this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    //     // this.http.get(fakeDataUrl).subscribe((res: any) => {
    //     //     this.data = this.data.concat(res.results);
    //     //     this.list = [...this.data];
    //     //     this.loadingMore = false;
    //     // });
    // }

    searchItem(searchItem) {
        console.log(searchItem);
    }

    addItem() {
        this.conditionExpression="editProject";
        this.isAddProject = true;
    }

    editItem() {
        this.isAddProject = false;
        this.conditionExpression="editProject";
    }

    editProjectMembers(project:object) {
        this.getProjectMemberItemListData(project["id"]);
        this.editProject = project;
        console.log(project);
        this.conditionExpression="editProjectMembers";
    }

    // outData(value) {
    //     const value1 = JSON.parse(value);
    //     console.log(value1);
    //     // this.province = value1.hasOwnProperty('_province') ? value1._province : '';
    //     // this.provinceCode = value1.hasOwnProperty('_provinceCode') ? value1._provinceCode : '';
    //     // this.city = this.province && value1.hasOwnProperty('_city') ? value1._city : '';
    //     // this.cityCode = this.provinceCode && value1.hasOwnProperty('_cityCode') ? value1._cityCode : '';
    //     // this.county = this.city && value1.hasOwnProperty('_area') ? value1._area : '';
    //     // this.countyCode = this.cityCode && value1.hasOwnProperty('_areaCode') ? value1._areaCode : '';
    //     // this.addressed = value1.hasOwnProperty('_address') ? value1._address : '';
    //     // console.log(this.province + ',' + this.city + ',' + this.county + ',' + this.addressed);
    // }

    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.validateForm.controls.password.value) {
            return {confirm: true, error: true};
        }
        return {};
    }


    submitForm = ($event: any, value: any) => {
        $event.preventDefault();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }

    resetForm(e: MouseEvent): void {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }

    submitAddMemberFromProjectForm = ($event: any, value: any) => {
        // $event.preventDefault();
        for (const key in this.validateAddMemberFromProjectForm.controls) {
            this.validateAddMemberFromProjectForm.controls[key].markAsDirty();
            this.validateAddMemberFromProjectForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }

    submitAddMemberByEmailForm = ($event: any, value: any) => {
        // $event.preventDefault();
        for (const key in this.validateAddMemberByEmailForm.controls) {
            this.validateAddMemberByEmailForm.controls[key].markAsDirty();
            this.validateAddMemberByEmailForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
    addMemberFromProjectField(e?: MouseEvent): void {
        if (e) {
            e.preventDefault();
        }
        const id = this.controlArray.length > 0 ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

        const control = {
            id:id,
            controlInstance: `member${id}`,
            id2:id+1000,
            controlInstance2: `role${id+1000}`
        };
        const index = this.controlArray.push(control);
        console.log(this.controlArray[this.controlArray.length - 1]);
        console.log(this.controlArray[index - 1].controlInstance);
        this.validateAddMemberFromProjectForm.addControl(
            this.controlArray[index - 1].controlInstance,
            new FormControl(null, Validators.required)
        );
    }

    addMemberByEmailField(e?: MouseEvent): void {
        if (e) {
            e.preventDefault();
        }
        const id = this.emailControlArray.length > 0 ? this.emailControlArray[this.emailControlArray.length - 1].id + 1 : 0;

        const control = {
            id:id,
            controlInstance: `emailMember${id}`,
            id2:id+1000,
            controlInstance2: `emailRole${id+1000}`
        };
        const index = this.emailControlArray.push(control);
        console.log(this.emailControlArray[this.emailControlArray.length - 1]);
        console.log(this.emailControlArray[index - 1].controlInstance);
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[index - 1].controlInstance,
            new FormControl(null, Validators.required)
        );
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[index - 1].controlInstance2,
            new FormControl(null, Validators.required)
        );
    }

    deleteControlItem(id) {
        this.controlArray = this.controlArray.filter(function(item) {
            return item.id !== id;
        });
        console.log(this.controlArray);
    }
    deleteEmailControlArrayItem(id) {
        this.emailControlArray = this.emailControlArray.filter(function(item) {
            return item.id !== id;
        });
        // console.log(array);
    }

    editMenmberRole(item) {
        this.isSaveFlag[item.id]=false;
    }
    saveMenmberRole(item) {
        this.isSaveFlag[item.id]=true;
    }
}
