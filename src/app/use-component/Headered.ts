export class  Headered {
    headered: any;
    constructor() {
        this.headered = [
            {
                field: 'name',
                headName: '姓名',
                hide: true,
                filter: true,
                sort: true,
                search: false,
                filterText: [{ text: 'venla', value: 'venla' }, { text: 'nicol', value: 'nicol' }]
            },
            {
                field: 'gender',
                headName: '性别',
                filter: true,
                sort: false,
                search: true,
                filterText: [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }]
            },
            {
                field: 'email',
                headName: '邮件',
                filter: true,
                sort: true,
                search: true,
                filterText: []
            },
        ];
    }
}
