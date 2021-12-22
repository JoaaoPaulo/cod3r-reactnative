import React from "react";
import {View, StyleSheet} from "react-native";

// import CompPadrao, {Comp1, Comp2} from './componentes/multi';
// import Primeiro from './componentes/primeiro';
// import MinMaxx from './componentes/MinMax';
// import Aleatorio from './componentes/aleatorio';
// import Titulo from './componentes/Titulo';
import Botao from './componentes/botao';
import Contador from './componentes/Contador';

export default() => {
    return (
        <View style={style.App}>
            
            

            <Contador/>
        
            {/* 
            <Botao/>
            <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro do Produto'/>
            <CompPadrao/>
            <Comp1/>
            <Comp2/>
            <Primeiro/> 
            <MinMaxx min={10} max={20}/> 

            <Aleatorio min={10} max={100}/>
            <Aleatorio min={10} max={100}/>
            <Aleatorio min={10} max={100}/>
            <Aleatorio min={10} max={100}/>*/}
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})