import {Component, OnInit} from '@angular/core';
import {RoleManagementService} from "../service/role-management.service";

@Component({
    selector: 'app-role-management',
    templateUrl: './role-management.component.html',
    styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent extends RoleManagementService implements OnInit {

    nodes = [
        {
            title: '0-0',
            key: '100',
            expanded: true,
            children: [
                {
                    title: '0-0-0',
                    key: '1001',
                    children: [{ title: '0-0-0-0', key: '10010', isLeaf: true }, { title: '0-0-0-1', key: '10011', isLeaf: true }]
                },
                {
                    title: '0-0-1',
                    key: '1002',
                    children: [{ title: '0-0-1-0', key: '10020', isLeaf: true }]
                }
            ]
        }
    ];

    ngOnInit() {
        this.isShow[0] = true;
        this.isShow[1] = true;
        this.isClicked = true;
    }

    mouseover(id) {
        console.log(123);
        this.isShow[id] = false;
        // this.renderer.setStyle(this.elementRef.nativeElement,"display","block");
        // this.renderer.setAttribute(this.elementRef.nativeElement.querySelector(".del"),"hidden",false);
    }

    mouseout(id) {
        this.isShow[id] = true;
    }

}
