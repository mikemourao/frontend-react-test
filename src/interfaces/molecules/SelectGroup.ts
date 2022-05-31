export interface Option {
    id: number,
    label: string
}

export interface OptionGroup {
    label: string,
    values: Array<Option>
}

export default interface ISelectGroup {
    data?: Array<OptionGroup>
}