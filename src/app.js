import React from "react";
import {View, StyleSheet} from "react-native";

// import CompPadrao, {Comp1, Comp2} from './componentes/multi';
// import Primeiro from './componentes/primeiro';
// import MinMaxx from './componentes/MinMax';
// import Aleatorio from './componentes/aleatorio';
// import Titulo from './componentes/Titulo';
// import Botao from './componentes/botao';
// import Contador from './componentes/Contador';
// import Pai from './componentes/direta/Pai';
import Pai from './componentes/indireta/Pai';
// import ContadorV2 from './componentes/contador/ContadorV2';

export default() => {
    return (
        <View style={style.App}>
            
            
            {/* <ContadorV2/> */}
            <Pai/>

            {/*
            <Pai/>
            <Pai/>
            <Contador/>
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