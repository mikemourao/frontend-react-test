import { FormLayout } from "antd/lib/form/Form";
import IInput from '../atoms/Input';

export default interface Form {
    name: string,
    onFinish: ((values: any) => void),
    onFinishFailed?: ((errorInfo: any) => void),
    onCancel?: (()=> void),
    layout?: FormLayout,
    inputs: Array<IInput> | Array<any>,
    submitText: string,
    cancelText?: string,
    resetText?: string,
    isLoading?: boolean,
    initialValues?: {},
    isEditing?: boolean
}