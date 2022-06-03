import React, { useState, useEffect } from 'react';
import { Col, Typography, Card, Input, Button } from 'antd';
import { Container, Content, IconButton } from '../components/templates/crud/Index.style';
import { IIconButton } from '../interfaces/organisms/Table';
import { ReloadOutlined, StarOutlined } from '@ant-design/icons';
import FavoriteService from '../services/languages';


const Index: React.FC = () => {
    const [state, _setState] = useState({
        dataSource: [],
        isLoading: false,
        isModalVisible: false,
    })


    const { getColumns, getJavaScript, onSearch, getSearch } = FavoriteService;
 
    const setState = (newValue: any) => {
        _setState(prev => ({ ...prev, ...newValue }));
    }

    function showItems(){

        var arr = []; 
        let resultDIV = document.getElementById('d');
        resultDIV!.innerHTML = "";
        if (localStorage.favorite){             
           arr = JSON.parse(localStorage.getItem('favorite')!); 
        }

        for(var i in arr){
            let p = document.createElement("p");
            p.innerHTML = arr[i];
            resultDIV!.append(p);
        }
      

        console.log(arr);
        
    }

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Button id="v" onClick={showItems}>Show</Button>
        <div id="d">
            
        </div>
        </div>
        
    )
}

export default Index;