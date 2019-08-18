import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-drop-down-list',
    templateUrl: './drop-down-list.component.html',
    styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnInit {
    // @Input()
    public data;

    @ViewChild('itemOfRow') item: ElementRef;

    constructor(public renderer: Renderer2, public elementRef: ElementRef) {
        this.setUpList();
    }

    setUpList() {
        // this.elementRef.nativeElement
    }

    ngOnInit() {
        this.data = [{
            "id": "1",
            "content": "icon-project",
            "name": "项目管理"
        },{
            "id": "2",
            "content": "icon-project",
            "name": "团队管理",
            "children": [{
                "id": "11",
                "content": "icon-project",
                "name": "项目管理1"
            },{
                "id": "12",
                "content": "icon-project",
                "name": "团队管理1"
            },{
                "id": "13",
                "content": "icon-project",
                "name": "角色管理1"
            }]
        },{
            "id": "3",
            "content": "icon-project",
            "name": "角色管理"
        }];
    }


}
