interface DefaultConfigModelInterface {
    registered: boolean;
    project: string;
    invitableMember: string;
    validityPeriod: string;
    moduleAvailable: Array<any>;
}

export class DefaultConfigModel {

    private _registered: boolean;
    private _project: string;
    private _invitableMember: string;
    private _validityPeriod: string;
    private _moduleAvailable: Array<any>;

    constructor() {
        this.registered = null;
        this.project = null;
        this.invitableMember = null;
        this.validityPeriod = null;
        this.moduleAvailable = [];
    }

    get registered(): boolean {
        return this._registered;
    }

    set registered(value: boolean) {
        this._registered = value;
    }

    get project(): string {
        return this._project;
    }

    set project(value: string) {
        this._project = value;
    }

    get invitableMember(): string {
        return this._invitableMember;
    }

    set invitableMember(value: string) {
        this._invitableMember = value;
    }

    get validityPeriod(): string {
        return this._validityPeriod;
    }

    set validityPeriod(value: string) {
        this._validityPeriod = value;
    }

    get moduleAvailable(): Array<any> {
        return this._moduleAvailable;
    }

    set moduleAvailable(value: Array<any>) {
        this._moduleAvailable = value;
    }

    getDefaultConfigData() {
        const config = {
            'registered': this.registered,
            'project': this.project,
            'invitableMember': this.invitableMember,
            'validityPeriod': this.validityPeriod,
            'moduleAvailable': this.moduleAvailable
        }
        return config;
    }
}
