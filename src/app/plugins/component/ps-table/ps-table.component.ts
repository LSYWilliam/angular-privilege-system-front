import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ps-table',
  templateUrl: './ps-table.component.html',
  styleUrls: ['./ps-table.component.scss'],
})
export class PsTableComponent implements OnInit, OnChanges {

    /** 表格数据(当前页) */
    @Input() public dataSet: any;
    /** 表格头部字段数据 */
    @Input() public headered: any;
    /** 总条数 */
    @Input() public total: number;
    /** 是否加载中 */
    @Input() public loading: boolean;
    /** 当前页码 */
    @Input() public pageIndex: number;
    /** 当前每页大小 */
    @Input() public pageSize: any;
    /** 是否选中复选框 */
    @Input() public isCheckBox: any;
    /** 是否进行过滤 */
    @Input() public filterGender: any;

    isAllDisplayDataChecked = false;
    isIndeterminate = false;
    listOfDisplayData: any[] = [];
    mapOfCheckedId: { [key: string]: boolean } = {};

    /** 搜索 */
    public searchValue: any;

    /** 表格分页事件 */
    @Output() pageIndexEvent: EventEmitter<any> = new EventEmitter<any>();
    /** 表格页数事件 */
    @Output() pageSizeEvent: EventEmitter<any> = new EventEmitter<any>();
    /** 表格排序事件 （单列排序模式） */
    @Output() pageSortEvent: EventEmitter<any> = new EventEmitter<any>();
    /** 表格搜索事件 */
    @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
    /** 表格筛选事件 */
    @Output() updateFilterEvent: EventEmitter<any> = new EventEmitter<any>();

    sortValue: string | null = null;
    sortKey: string | null = null;
    searchGenderList: string[] = [];

    constructor() {}

    setIconRight($event) {
        if ($event.filter === true && $event.sort === false) {
            return '28px';
        } else if ($event.filter === false && $event.sort === false) {
            return '0px';
        } else {
            return '56px';
        }
    }

    reset(): void {
        this.searchValue = '';
        this.search([]);
    }

    search(value): void {
        this.searchEvent.emit([value, this.searchValue]);
        this.searchValue = '';
    }

    sort(sort: { key: string; value: string }): void {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.pageSortEvent.emit({key: this.sortKey, value: this.sortValue});
    }

    currentPageDataChange($event): void {
        this.listOfDisplayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
        this.isIndeterminate =
            this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    }

    checkAll(value: boolean): void {
        this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
    }

    /** 当前页码改版时的回调函数 */
    indexChange() {
        this.pageIndexEvent.emit(this.pageIndex);
    }

    /** 页数改变时的回调函数 */
    sizeChange(reset: boolean = false) {
        if (reset) {
            this.pageIndex = 1;
            this.pageSizeEvent.emit(this.pageSize);
        }
    }

    updateFilter(value: string[]): void {
        this.searchGenderList = value;
        this.updateFilterEvent.emit(this.searchGenderList);
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            const chng = changes[propName];
            const cur  = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
        }
    }
}
