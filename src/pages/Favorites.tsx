/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Card, Button } from 'antd';


const Index: React.FC = () => {

    function showItems() {

        var arr = [];
        let resultDIV = document.getElementById('d');
        resultDIV!.innerHTML = "";
        if (localStorage.favorite) {
            arr = JSON.parse(localStorage.getItem('favorite')!);
        }

        for (var i in arr) {
            let p = document.createElement("p");
            p.innerHTML = arr[i];
            resultDIV!.append(p);
        }
    }

    return (
        <div style={{ margin: 25 }}>
            <div style={{ marginBottom: 10 }}>

                <Card title={<b style={{color: 'white'}}>Um pouco sobre o conceito de Linguagem de Programação.</b>} style={{ color: 'white', fontSize: 15 }}>
                    A linguagem de programação é um método padronizado, formado por um conjunto de regras sintáticas e semânticas, de implementação de um código fonte -
                    que pode ser compilado e transformado em um programa de computador, ou usado como script interpretado - que informará instruções de processamento ao
                    computador. Permite que um programador especifique precisamente quais os dados que o computador irá atuar, como estes dados serão armazenados
                    ou transmitidos e, quais ações devem ser tomadas de acordo com as circunstâncias. Linguagens de programação podem ser usadas para expressar algoritmos com
                    precisão. <a href='https://pt.wikipedia.org/wiki/Linguagem_de_programa%C3%A7%C3%A3o' target="_blank">Saiba mais no site...</a>
                </Card>

            </div>
            
            <div style={{ marginTop: 20 }}>

                <Button id="v" style={{color: '#00ebe3', backgroundColor: '#355755'}} onClick={showItems}>{<b>Exibir Lista de Linguagens Favoritas</b>}</Button>
                <Card id="d"
                    size="small"
                    style={{
                        width: "30%",
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16,
                        marginTop: 10,
                        backgroundColor: '#355755',
                        overflowY: "scroll",
                        height: 450,
                    }}>
                </Card>

            </div>

        </div>

    )
}

export default Index;