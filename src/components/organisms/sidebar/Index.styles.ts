import styled from 'styled-components';
import { Layout, Menu as MenuAntd } from 'antd';
import Color from '../../../config/Colors';

interface ISider {
    fixed?: boolean
}

export const Sider = styled(Layout.Sider)<ISider>`
    background-color: ${Color.backgroundColor};
    padding-top: 0px;
    border-right: 1px solid ${Color.borderColor};
    /* overflow: visible; */
    position: ${props => props.fixed ? 'fixed' : 'relative'};
    height: 100vh;
    z-index: 99;
`;

export const Menu = styled(MenuAntd)`
    background-color: ${Color.backgroundColor};
    border-right: unset;
`;

export const Trigger = styled.div`
    background-color: ${Color.primaryColor};
`;