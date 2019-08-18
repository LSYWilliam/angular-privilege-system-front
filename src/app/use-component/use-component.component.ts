import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headered } from './Headered';
import { RandomUserService } from './RandomUserService';

@Component({
    selector: 'app-use-component',
    templateUrl: './use-component.component.html',
    styleUrls: ['./use-component.component.scss'],
    providers: [ RandomUserService ]
})
export class UseComponentComponent implements OnInit {

    /** 获取全国全部的省市区 */
    public threeLinkData: any;
    /** 查询的 省 */
    public province: any;
    public provinceCode: any;
    /** 查询的 市 */
    public city: any;
    public cityCode: any;
    /** 查询的 区 */
    public county: any;
    public countyCode: any;
    /** 查询详细的地区 */
    public addressed: any;

    public useModel: Array<any> = [];

    /** 表格 */
    listOfData = [];
    pageIndex = 1;
    pageSize = 10;
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
    public headered: Headered = new Headered();

    constructor(private http: HttpClient, private randomUserService: RandomUserService) {}

    ngOnInit(): void {
        this.getThreeLinkData();
        this.useModel = [
            {
                id: 1,
                name: '数据接入',
                select: false
            },
            {
                id: 2,
                name: '数据处理',
                select: false
            },
            {
                id: 3,
                name: '权限管理',
                select: false
            },
            {
                id: 4,
                name: '权限管理',
                select: true
            },
            {
                id: 5,
                name: '权限管理',
                select: true
            },
            {
                id: 6,
                name: '权限管理',
                select: true
            },
            {
                id: 7,
                name: '权限管理',
                select: true
            }
        ];
        this.searchData();
    }

    outData(value) {
        const value1 = JSON.parse(value);
        this.province = value1.hasOwnProperty('_province') ? value1._province : '';
        this.provinceCode = value1.hasOwnProperty('_provinceCode') ? value1._provinceCode : '';
        this.city = this.province && value1.hasOwnProperty('_city') ? value1._city : '';
        this.cityCode = this.provinceCode && value1.hasOwnProperty('_cityCode') ? value1._cityCode : '';
        this.county = this.city && value1.hasOwnProperty('_area') ? value1._area : '';
        this.countyCode = this.cityCode && value1.hasOwnProperty('_areaCode') ? value1._areaCode : '';
        this.addressed = value1.hasOwnProperty('_address') ? value1._address : '';
        console.log(this.province + ',' + this.city + ',' + this.county + ',' + this.addressed);
    }

    /** 获取中国地区省市区内容 */
    getThreeLinkData() {
        const url = './assets/data/api/city-link/city.json';
        this.http.get<any>(url).subscribe(res => {
            this.threeLinkData = res;
        });
    }

    searchData(): void {
        this.loading = true;
        this.randomUserService.getUsers(
            this.pageIndex,
            this.pageSize,
            this.sortKey,
            this.sortValue,
            this.searchGenderList).subscribe((data: any) => {
            this.loading = false;
            this.total = 100;
            this.listOfData = data.results;
        });
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
