import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-use-model',
  templateUrl: './use-model.component.html',
  styleUrls: ['./use-model.component.scss']
})
export class UseModelComponent implements OnInit {

    /** 双向绑定-可使用模块 */
    private _useModel: any;
    @Input()
    get useModel(): any {
        return this._useModel;
    }

    set useModel(value: any) {
        this._useModel = value;
        this.useModelChange.emit(this._useModel);
    }
    @Output() useModelChange = new EventEmitter<any>();

    public modelBg: boolean;

    constructor() { }

    ngOnInit() {
        this.modelBg = false;
    }

    toggleSelect(key, $event) {
        this._useModel[key].select = $event.select ? false : true;
    }

}
