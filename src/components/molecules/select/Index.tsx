import React from 'react';
import { Select } from 'antd';
import ISelect from '../../../interfaces/molecules/Select';

const Index: React.FC<ISelect> = (props)=> {
    const { data } = props;
    
    return (
        <Select {...props} size="large" allowClear>
            {data?.map(v=><Select.Option value={v.id}>{v.value}</Select.Option>)}
        </Select>
    )
}

export default Index;