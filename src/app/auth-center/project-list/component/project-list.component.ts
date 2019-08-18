import { Component, OnInit } from '@angular/core';
import { PlHeader } from '../model/plHeader';
import { ProjectListService } from '../service/project-list.service';
declare let require: any;

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

    public projectName: string;
    public creator: string;

    /** 表格 */
    listOfData = [];
    pageIndex = 1;
    pageSize = 5;
    total = 1;
    loading = true;
    // 排序：value
    sortValue: string | null = null;
    // 排序：key
    sortKey: string | null = null;
    // 选中条件
    searchGenderList: string[] = [];
    filterGender = [
        { text: 'male', value: 'male' },
        { text: 'female', value: 'female' }
    ];
    /** 表格静态数据 实体类 */
    public headered: PlHeader = new PlHeader();

    constructor(private projectListService: ProjectListService) {}

    ngOnInit() {
        this.searchData();
    }

    /** 改变项目名 */
    projectNameChanged() {

    }

    /** 改变创建者 */
    creatorChanged() {

    }

    /** 重置 */
    resetKey() {
        this.projectName = null;
        this.creator = null;
        console.log(this.projectName + this.creator);
    }

    /** 获取数据 */
    searchData(): void {
        this.loading = true;
        this.projectListService.getUsers(
            this.pageIndex,
            this.pageSize,
            this.sortKey,
            this.sortValue,
            this.searchGenderList).subscribe((data: any) => {
            this.loading = false;
            this.total = 100;
            this.listOfData = this.getPlData().data;
        });
    }

    /** 表格数据 */
    getPlData() {
        const Mock = require('mockjs');
        const data = Mock.mock({
            'data|5': [
                {
                    'id|+1': 1,
                    'projectName|1': '@ctitle(4, 6)' + '项目',
                    'creator|1': '@cname',
                    'contact|1': '@cname',
                    'contactNumber|13111111111-19999999999': 18851604548,
                    'projectMembersNumber|2-30': 5,
                    'area|1': '@city()',
                    'usingModules|1': [
                        ['数据接入', '权限中心', '数据对接', '更改权限'],
                        ['数据接入', '数据处理', '权限管理', '更改权限'],
                        ['数据接入', '数据处理', '权限管理'],
                        ['数据接入', '数据对接', '更改权限'],
                        ['权限管理', '权限中心', '数据对接', '更改权限']
                    ],
                    'creationTime|1': '@datetime',
                    'recentlyEditedTime|1': '@datetime'
                }
            ]
        });
        return data;
    }

    /** 表格索引值大小改变的事件 */
    pageIndexEvent(value) {
        this.pageIndex = value;
        this.searchData();
    }

    /** 表格页数大小改变的事件 */
    pageSizeEvent(value) {
        this.pageSize = value;
        this.searchData();
    }

    /** 表格排序改变的事件 */
    pageSortEvent($event) {
        this.sortKey = $event.key;
        this.sortValue = $event.value;
        this.searchData();
    }

    /** 搜索事件 */
    searchEvent(value) {
        console.log(value);
        // this.searchData();
    }

    /** 筛选事件 */
    updateFilterEvent($event) {
        this.searchGenderList = $event;
        this.searchData();
    }

}
