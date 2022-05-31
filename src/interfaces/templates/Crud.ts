interface Columns {
    title: string;
    dataIndex: string;
    key: string;
    render?: (text: any, record: any, index: any) => any,
    tag?: boolean
}

interface IService {
    getForm: () => any,
    getCustomForm?: () => any,
    getColumns?: () => Columns[],
    getFilter?: () => any,
    getSearch: () => any,
    getJavaScript?: () => Promise<any>,
    onSearch: (filterValue: string) => any,
    get: (languages: any) => Promise<any>,
    post: (body: any) => Promise<any>,
    put?: (body: any) => Promise<any>,
    del?: (body: any) => Promise<any>
}

export default interface Crud {
    service: IService,
    name: string,
    tableTitle: string,
    filter?: boolean,
    confirmDeleteMessaging?: string,
    actions: Array<"create" | "edit" | "delete">,
    modalTitles?: { create: string, edit: string }
    submitTitle?: string,
    editIcon?: any,
    deleteIcon?: any
}