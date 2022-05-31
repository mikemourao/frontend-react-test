import styled from 'styled-components';
import { Layout, Col } from 'antd';
import Colors from '../../config/Colors';

export const Container = styled(Layout)` 
    min-height: 100vh;
`;

export const LayoutBody = styled(Layout)` 
    background-color: ${Colors.backgroundColor};
`;

export const Content = styled(Layout.Content)` 
    margin: 16px 16px;
    margin-top: 5px;
`;

export const Header = styled(Layout.Header)` 
    padding-left: 16px;
    padding-right: 16px;
    background-color: ${Colors.backgroundColor};
    position: static;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 1px ${Colors.borderColor};
    height: 56px;
`;

export const RightHeader = styled(Col)`
    display: flex;
    justify-content: flex-end;
    align-self: center;
`;
