import React, { useState, useEffect } from 'react';
import { Col, Typography, Table, Input, Tooltip, notification } from 'antd';
import { Container, Content, IconButton } from '../components/templates/crud/Index.style';
import { IIconButton } from '../interfaces/organisms/Table';
import { ReloadOutlined, StarOutlined } from '@ant-design/icons';
import RaspConfiguredService from '../services/languages';


const Index: React.FC = () => {
    const [state, _setState] = useState({
        dataSource: [],
        isLoading: false,
        isModalVisible: false,
        isFilter: false,
        language: '',
        languageSelect: '',
        idFavorite: [],
        Favorite: [],
        languageFavorite: []
    })


    const { getColumns, getJavaScript, onSearch, getSearch } = RaspConfiguredService;
    const iconButtonCommonProps: IIconButton = {
        type: "default",
        shape: "round"
    }

    const setState = (newValue: any) => {
        _setState(prev => ({ ...prev, ...newValue }));
    }

    const handleColumns = (): any => {
        return [
            ...getColumns(),
        ]
    }
    
    const handleServiceGet = async (full_name: any) => {
        setState({ isLoading: true });

        let response = await getJavaScript(full_name);     

        setState({ isLoading: false, dataSource: response.data['items']});
    }

    //Function to search language

    const handleOnSearch = async (language: any) => {

        state.languageFavorite = language

        if (language !== "") {
            let res = await onSearch(language);    

            setState({ dataSource: res, languageSelect: language });
            
        }
    }

    //Function to save to localStorage
    
    const handleFavorite = async () => {

        var arr = [];   

        var valueInput = (document.getElementById("v") as HTMLInputElement).value;

        if(valueInput !== ''){
            if (localStorage.favorite){
                arr = JSON.parse(localStorage.getItem('favorite')!);
            }
    
            let newFavorite = (document.getElementById("v") as HTMLInputElement).value.toUpperCase();
            arr.push(newFavorite);
            (document.getElementById("v") as HTMLInputElement);
            localStorage.favorite = JSON.stringify(arr);

            notification.success({ message: 'Salvo como favorito!!!' })
        }else {
            notification.error({ message: 'Informe uma linguagem de Programação!' })
        }

       
    }

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Container  style={{ marginTop: 20 }} gutter={[8, 8]}>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Typography.Title style={{ marginLeft: 30, color: 'white' }} level={4}>Lista de repositórios {state.languageSelect.toUpperCase()}</Typography.Title>
                </Col>
                <Content xs={24} sm={18} md={10} lg={10} xl={10}>
                    <Tooltip title="Reload"><IconButton {...iconButtonCommonProps} icon={<ReloadOutlined />} onClick={handleServiceGet} marginRight /></Tooltip>
                    <Tooltip title="Favoritar"><IconButton {...iconButtonCommonProps} icon={<StarOutlined />} onClick={handleFavorite} marginRight /></Tooltip>
                </Content>
                <Col xs={24} sm={6} md={4} lg={4} xl={4}>
                    <Input.Search id="v" name="name" allowClear style={{ width: '100%' }} placeholder={getSearch().label} onSearch={handleOnSearch} />
                </Col>
            </Container>
            <Table
                columns={handleColumns()}
                dataSource={state.dataSource}
                size="small"
                scroll={{ x: 'max-content' }}
                loading={state.isLoading}
            />
        </div>
    )
}

export default Index;