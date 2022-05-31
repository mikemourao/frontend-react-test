import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

interface IIconButton {
    marginRight?: boolean
}

export const Container = styled(Row)`
    display: flex;
    margin-bottom: 16px;
`;

export const Content = styled(Col)`
    display: flex;
    justify-content: flex-end;
`;

export const IconButton = styled(Button)<IIconButton>`
    margin-right: ${props => props.marginRight ? 8 : 0}px;
`;

export const AlignEndCol = styled(Col)`
    text-align: end
`;