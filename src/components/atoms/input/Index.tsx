import React, { useEffect, useState } from 'react';
import { Form, Input, Upload, Button } from 'antd';
import Select from '../../molecules/select/Index';
import Radio from '../../atoms/radio-button/Index';
import IInput from '../../../interfaces/atoms/Input';
import SelectGroup from '../../molecules/select-group/Index';
import { UploadOutlined } from '@ant-design/icons';

interface IState {
    selectData?: any
}

const Index: React.FC<IInput> = (props) => {
    const [state, setState] = useState<IState>({
        selectData: []
    })  

    const { label, name, rules, password, editable, config } = props;
    let type = config?.type ? config.type : "text"; 
    let disabled = editable === undefined ? false : true;

    const getConfigData = async()=>{
        if(config?.data){
            let response = await config?.data();
            setState(prev=>({...prev, selectData: response}))
        }      
    }

    const getConfigGroupData = async()=>{
        if(config?.groupData){
            let response = await config?.groupData();
            setState(prev=>({...prev, selectData: response}))
        }      
    }

    const inputType = {
        select: <Select data={state.selectData}/>,
        number: <Input type="number" disabled={disabled} min={1} max={4294967295} size="large"/>,
        radio: <Radio data={state.selectData} defaultValue={config?.defaultValue} />,
        text: <Input disabled={disabled} size="large"/>,
        file: 
        <Upload type="drag" maxCount={1} accept={config?.accept}>
            <Button icon={<UploadOutlined />} type="text">Clique ou arraste para adicionar</Button>
        </Upload>,
        'select-group': <SelectGroup data={state.selectData}/>
    }

    useEffect(()=> {
        getConfigData();
        getConfigGroupData();
    }, []);

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            {password ? 
                <Input.Password size="large"/> :
                inputType[type]
            }
        </Form.Item>
    )
}

export default Index;