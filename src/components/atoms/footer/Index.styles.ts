import styled from "styled-components";
import { Layout } from "antd";
import Colors from '../../../config/Colors';

export const Footer = styled(Layout.Footer)`
    text-align: center;
    font-size: 10px;
    background-color: ${Colors.backgroundColor};
    color: white;
`;