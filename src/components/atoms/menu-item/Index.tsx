import React from 'react';
import IMenuItem from '../../../interfaces/atoms/MenuItem';
import { MenuItem, MenuItemTitle } from './Index.styles';

const Index: React.FC<IMenuItem> = (props) => {
    const { key, icon, title, children } = props;
    
    const handleIcon = ()=> {
        return icon ? {icon: <img src={icon} alt={title} height={24}/>} : null
    }

    return (
        <MenuItem {...props} {...handleIcon()} key={key}>
            <MenuItemTitle>
                {title}
            </MenuItemTitle>
            {children}
        </MenuItem>
    )
}

export default Index;