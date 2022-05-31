import React, { useState, useEffect } from 'react';
import { Col, Typography, Table, Input } from 'antd';
import { Container, Content, IconButton } from '../components/templates/crud/Index.style';
import { IIconButton } from '../interfaces/organisms/Table';
import { ReloadOutlined } from '@ant-design/icons';
import RaspConfiguredService from '../services/languages';


const Index: React.FC = () => {
    const [state, _setState] = useState({
        dataSource: [],
        isLoading: false,
        isModalVisible: false,
        isFilter: false,
        language: '',
        languageSelect: ''
    })


    const { getColumns, getJavaScript, onSearch, getSearch } = RaspConfiguredService;
    const iconButtonCommonProps: IIconButton = {
        type: "default",
        shape: "round"
    }

    const setState = (newValue: any) => {
        _setState(prev => ({ ...prev, ...newValue }));
    }


    const handleServiceGet = async () => {
        setState({ isLoading: true });

        let response = await getJavaScript();

        setState({ isLoading: false, dataSource: response.data['items'] });
    }

    const handleOnSearch = async (language: string) => {
        if (language !== "") {
            let res = await onSearch(language);
            setState({ dataSource: res, languageSelect: language });
        } else {

        }
    }

    useEffect(() => {
        handleServiceGet();
    }, []);

    return (
        <div>
            <Container  style={{ marginTop: 20 }} gutter={[8, 8]}>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Typography.Title style={{ marginLeft: 30 }} level={4}>Lista de repositorios {state.languageSelect}</Typography.Title>
                </Col>
                <Content xs={24} sm={18} md={10} lg={10} xl={10}>
                    <IconButton {...iconButtonCommonProps} icon={<ReloadOutlined />} onClick={handleServiceGet} marginRight />
                </Content>
                <Col xs={24} sm={6} md={4} lg={4} xl={4}>
                    <Input.Search allowClear style={{ width: '100%' }} placeholder={getSearch().label} onSearch={handleOnSearch} />
                </Col>
            </Container>
            <Table
                columns={getColumns()}
                dataSource={state.dataSource}
                size="small"
                scroll={{ x: 'max-content' }}
                loading={state.isLoading}
                pagination={true}

            />
        </div>
    )
}

export default Index;