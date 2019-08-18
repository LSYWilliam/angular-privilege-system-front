import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestArgs} from "../../../../shared/model/request-args";
import {HttpClientService} from "../../../../shared/service/httpClient.service";

@Component({
    selector: 'app-address-link',
    templateUrl: './address-link.component.html',
    styleUrls: ['./address-link.component.scss']
})
export class AddressLinkComponent implements OnInit {

    /** 获取全国全部的省市区 */
    public threeLinkData: any;
    /** 查询的 省 */
    public _province: any;
    @Input()
    get province() {
        return this._province;
    }
    set province(val: any) {
        this._province = val;
        this.provinceChange.emit(this._province);
    }
    @Output() provinceChange = new EventEmitter<any>();

    public _provinceCode: any;
    /** 查询的 市 */
    public _city: any;
    @Input()
    get city() {
        return this._city;
    }
    set city(val: any) {
        this._city = val;
        this.cityChange.emit(this._city);
    }
    @Output() cityChange = new EventEmitter<any>();

    public _cityCode: any;
    /** 查询的 区 */
    public _county: any;
    @Input()
    get county() {
        return this._county;
    }
    set county(val: any) {
        this._county = val;
        this.countyChange.emit(this._county);
    }
    @Output() countyChange = new EventEmitter<any>();
    public _countyCode: any;
    /** 查询详细的地区 */
    public _addressed: any;
    @Input()
    get addressed() {
        return this._addressed;
    }
    set addressed(val: any) {
        this._addressed = val;
        this.addressedChange.emit(this._addressed);
    }
    @Output() addressedChange = new EventEmitter<any>();
    public requestArgs:RequestArgs = new RequestArgs();

    constructor(private http: HttpClientService) {
        this.getThreeLinkData();
    }

    /** 获取中国地区省市区内容 */
    getThreeLinkData() {
        console.log(1234567);
        // const url = '/assets/data/api/city-link/city.json';
        // this.http.get<any>(url).subscribe(res => {
        //     this.threeLinkData = res;
        //     console.log(res);
        // });
        this.requestArgs.systemName = 'test';
        // this.requestArgs.body = {};
        this.requestArgs.header = {'Content-Type':'application/json'};
        this.requestArgs.url = '/assets/data/api/city-link/city.json';
        this.http.httpGet(this.requestArgs).subscribe(res=> {
            console.log(123777777);
            this.threeLinkData = res;
        });
    }

    outData(value) {
        const value1 = JSON.parse(value);
        this._province = value1.hasOwnProperty('_province') ? value1._province : '';
        this._provinceCode = value1.hasOwnProperty('_provinceCode') ? value1._provinceCode : '';
        this._city = this._province && value1.hasOwnProperty('_city') ? value1._city : '';
        this._cityCode = this._provinceCode && value1.hasOwnProperty('_cityCode') ? value1._cityCode : '';
        this._county = this._city && value1.hasOwnProperty('_area') ? value1._area : '';
        this._countyCode = this._cityCode && value1.hasOwnProperty('_areaCode') ? value1._areaCode : '';
        this._addressed = value1.hasOwnProperty('_address') ? value1._address : '';
        console.log(this._province + ',' + this._city + ',' + this._county + ',' + this._addressed);
    }

    ngOnInit() {
    }


}
