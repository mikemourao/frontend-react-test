import { Form, Button } from 'antd';
import Input from '../../atoms/input/Index';
import IForm from '../../../interfaces/molecules/Form';
import { FooterContent } from './Index.style'

const Index: React.FC<IForm> = (props)=> {
    const { name, onFinish, onFinishFailed, onCancel, layout, inputs } = props;
    const { cancelText, submitText, isLoading, initialValues, isEditing } = props;
    const [form] = Form.useForm();

    const handleCancelButton = ()=> {
        return (
            <>
                {
                    cancelText ? 
                    <Form.Item style={{marginRight: 12}}>
                        <Button type="default" htmlType="button" onClick={onCancel} disabled={isLoading}>
                            {cancelText}
                        </Button>
                    </Form.Item>
                    :
                    null
                }
            </>
        )
    }

    return (
        <Form
            name={name}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout={layout}
            initialValues={initialValues}
            form={form}
        >
            {inputs.map((v, i)=>{
                if(isEditing && v.password){
                    return <></>
                }
                return (
                    <div style={{marginTop: i ? 12 : 0}}>
                        <Input
                            label={v.label}
                            name={v.name}
                            rules={v.rules}
                            password={v.password}
                            config={v.config}
                            editable={isEditing ? v.editable : undefined}
                            formRef={form}
                        />
                    </div>
                )    
            })}
            <FooterContent>
                {handleCancelButton()}
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        {submitText}
                    </Button>
                </Form.Item>
            </FooterContent>
        </Form>
    )
}

export default Index;