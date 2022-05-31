import React from 'react';
import { Select } from 'antd';
import SelectGroup, { OptionGroup, Option } from '../../../interfaces/molecules/SelectGroup';

const Index: React.FC<SelectGroup> = (props) => {
    const { data } = props;
    const { Option, OptGroup } = Select;
    return (
        <Select {...props} size="large" allowClear>
            {
                data?.map((v: OptionGroup)=> (
                    <OptGroup label={v.label}>
                        {
                            v.values.map((opt: Option)=>(
                                <Option value={opt.id}>{opt.label}</Option>
                            ))
                        }
                    </OptGroup>
                ))
            }
        </Select>
    )
}

export default Index;