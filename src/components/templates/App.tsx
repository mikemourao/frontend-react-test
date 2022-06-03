import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../organisms/sidebar/Index';
import Footer from '../atoms/footer/Index';
import Routes from '../../routes/Routes';
import SidebarData from '../../utils/SidebarData'
import { Header, Content, Container, LayoutBody, RightHeader } from './App.style';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Row, Col, Spin } from 'antd';
import Logo from '../../assets/img/icons8-github-64.svg';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const home = async () => {
        setIsLoading(true);
        setTimeout(()=> {
            setIsLoading(false);
            window.location.href = "http://localhost:3000/repository";
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
                                    <Button type='link' icon= {<HomeOutlined style={{fontSize: 20 }} onClick={home}/> }></Button>  
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
