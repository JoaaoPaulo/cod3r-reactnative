import React from "react";
import {Text} from "react-native";
import Estilo from './estilo';

export default( {min, max} ) =>  {

    // const {min, max} = props; -> Atribuição via desestruturação (destructuring assignment)
    
    const Aleatorio = Math.floor(Math.random() * (max - min)) + min;
    
    return (
            <Text style={Estilo.fontG}>
            Numero Aleatorio = {Aleatorio}
    </Text>
    )
}