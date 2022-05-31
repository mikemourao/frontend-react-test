import { AxiosResponse } from "axios";

export interface ITable {
    columns: any,
    dataSource: readonly any[],
    loading?: boolean,
    handleList?(): Promise<AxiosResponse<any>>,
    onEdit: (value: any)=> void,
    onDelete: (value: any)=> void,
    confirmDeleteMessaging?: string,
    editIcon?: any,
    deleteIcon?: any,
    actions: Array<"create" | "edit" | "delete">
}

export interface IIconButton {
    type?: "link" | "text" | "default" | "ghost" | "primary" | "dashed",
    shape?: "round" | "circle"
}