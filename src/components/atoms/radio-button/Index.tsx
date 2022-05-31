import React from 'react';
import { Radio } from 'antd';
import IRadio from '../../../interfaces/atoms/Radio';

const Index: React.FC<IRadio> = (props)=> {
    const { data, defaultValue } = props;
    return (
        <Radio.Group {...props} defaultValue={defaultValue}>
            {data?.map(v=><Radio value={v.id}>{v.value}</Radio>)}
        </Radio.Group>
    )
}

export default Index;