import {Component, OnInit} from '@angular/core';
import {TeamManagementService} from "../service/team-management.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-team-management',
    templateUrl: './team-management.component.html',
    styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent extends TeamManagementService implements OnInit {
    validateAddMemberByEmailForm: FormGroup;
    emailControlArray: Array<{ id: number; controlInstance: string; id2: number; controlInstance2: string; }> = [];

    ngOnInit() {
        this.emailControlArray.push({
            id:20000,
            controlInstance: `emailMember20000`,
            id2:30000,
            controlInstance2: `emailRole30000`
        });
        this.validateAddMemberByEmailForm = this.fb.group({});
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[0].controlInstance,
            new FormControl(null, Validators.required)
        );
        this.validateAddMemberByEmailForm.addControl(
            this.emailControlArray[0].controlInstance2,
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

    deleteEmailControlArrayItem(id) {
        this.emailControlArray = this.emailControlArray.filter(function(item) {
            return item.id !== id;
        });
        // console.log(array);
    }

}
