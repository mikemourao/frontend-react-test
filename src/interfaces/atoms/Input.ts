import { FormInstance, Rule } from "antd/lib/form";
import { OptionGroup } from '../../interfaces/molecules/SelectGroup';

export interface Data {
    id: number,
    value: string
}

interface Config {
    type?: "number" | "radio" | "select" | "text" | "file" | "select-group",
    data?: () => Array<Data>,
    groupData?: () => Array<OptionGroup>,
    accept?: string,
    defaultValue?: any,
    waitSelection?: string
}

export default interface Input {
    label: string,
    name: string,
    rules?: Array<Rule>,
    password?: boolean,
    config?: Config,
    editable?: boolean,
    formRef: FormInstance
}