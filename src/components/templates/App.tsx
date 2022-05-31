import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../organisms/sidebar/Index';
import Footer from '../atoms/footer/Index';
import Routes from '../../routes/Routes';
import SidebarData from '../../utils/SidebarData'
import { Header, Content, Container, LayoutBody, RightHeader } from './App.style';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Row, Col, Spin } from 'antd';
import { clearLocalStorages } from '../../services/LocalStorage';
import Logo from '../../assets/img/icons8-github-64.svg';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const logout = ()=> {
        setIsLoading(true);
        setTimeout(()=> {
            clearLocalStorages();
            setIsLoading(false);
        }, 1000);
    } 
    
    return (
        <Spin spinning={isLoading}>
            <BrowserRouter>
                <Container>
                    <Sidebar items={SidebarData} />
                    <LayoutBody>
                        <Header>
                            <Row>
                                <Col span={12}>
                                    <img src={Logo} alt="Logo" width={40} height={60}/>
                                </Col>
                                <RightHeader span={12}>
                                    <Popconfirm
                                        placement="leftBottom"
                                        title={'Deseja realmente sair?'}
                                        onConfirm={logout}
                                        okText="Sim"
                                        cancelText="Não"
                                    >
                                    <Button type='link' icon= {<PoweroffOutlined style={{fontSize: 20 }}/> }></Button> 
                                    </Popconfirm>   
                                </RightHeader>
                            </Row>
                        </Header>
                        <Content>
                            <Routes />
                        </Content>
                        <Footer />
                    </LayoutBody>
                </Container>
            </BrowserRouter>
        </Spin>
    );
}

export default App;
