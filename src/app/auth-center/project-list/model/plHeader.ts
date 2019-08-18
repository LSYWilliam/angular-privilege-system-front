export class  PlHeader {
    headered: any;
    constructor() {
        this.headered = [
            // {
            //     field: 'id',
            //     headName: 'ID',
            //     hide: true,
            //     filter: false,
            //     sort: false,
            //     search: false,
            //     filterText: []
            // },
            {
                field: 'projectName',
                headName: '项目名称',
                filter: false,
                sort: false,
                search: false,
                filterText: [{ text: 'venla', value: 'venla' }, { text: 'nicol', value: 'nicol' }]
            },
            {
                field: 'creator',
                headName: '创建者',
                filter: false,
                sort: false,
                search: false,
                filterText: [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }]
            },
            {
                field: 'contact',
                headName: '联系人',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            },
            {
                field: 'contactNumber',
                headName: '联系人电话',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            },
            {
                field: 'projectMembersNumber',
                headName: '项目成员数',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            },
            {
                field: 'area',
                headName: '地域',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            },
            {
                field: 'usingModules',
                headName: '使用模块',
                filter: false,
                sort: false,
                search: false,
                filterText: [],
                mouse: true
            },
            {
                field: 'creationTime',
                headName: '创建时间',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            },
            {
                field: 'recentlyEditedTime',
                headName: '最近编辑时间',
                filter: false,
                sort: false,
                search: false,
                filterText: []
            }
        ];
    }
}
