import React, { useState } from 'react';
import { Grid } from 'antd';
import { Sider, Menu, Trigger } from './Index.styles';
import MenuItem from '../../atoms/menu-item/Index';
import ISidebar from '../../../interfaces/organisms/Sidebar';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import SubMenu from '../../molecules/sub-menu/Index';
import Multilaser from '../../../assets/img/multilaser-dark.svg';
const { useBreakpoint } = Grid;

const Index: React.FC<ISidebar> = (props) => {
    const [collapsed, setCollapsed] = useState(true);
   
    const { items } = props;

    const screens = useBreakpoint();   
    
    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    const TriggerButton = ()=> {
        return (
            <Trigger>
                {!collapsed ? <LeftOutlined style={{color: 'white'}}/> : <RightOutlined style={{color: 'white'}}/>}
            </Trigger>
        )
    }

    const handleMenuItem = () => {
        return (
            <>
            {items.map(v=>{
                if(v.items){
                    return (
                        <SubMenu 
                            title={v.title} 
                            key={v.key} 
                            icon={v.icon} 
                            items={v.items} 
                        />
                    )
                }
                return (
                    <MenuItem
                        key={v.key} 
                        icon={v.icon} 
                        title={v.title}
                    >
                        <Link to={v.path ? v.path : ''}/>
                    </MenuItem>
                )
            })}
            </>
        )
    }

    return (
        <Sider 
            {...props} 
            collapsible 
            collapsed={collapsed}
            breakpoint="md"
            collapsedWidth={0}
            onCollapse={onCollapse}
			trigger={<TriggerButton/>}
            fixed={!screens.md}
        >
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={Multilaser} alt="Logo" width={165} height={61}/>
            </div>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                {handleMenuItem()}
            </Menu>
        </Sider>
    )
}

export default Index;