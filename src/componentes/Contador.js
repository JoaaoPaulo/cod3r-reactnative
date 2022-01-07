import React, { useState } from "react";
import {Button, Text} from "react-native";
import Estilo from './estilo';

export default ( { inicial = 0, passo = 1} ) => {

    // let numero = props.inicial
    const [numero, setNumero] = useState(inicial)
    const [passar, setPassar] = useState(passo)

    const incP = () => {
        setPassar(passar + 1)
        console.log(passar);
    }
    const decP = () => {
        setPassar(passar - 1)

    }

    const inc = () => {
        setNumero(numero + passar - 1)

    }
    const dec = () => {
        setNumero(numero - passar - 1)

    }


    return (

        <>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>

            <Text style={Estilo.fontG}>Numero do passo</Text>
            <Button title="+" onPress={incP}/>
            <Button title="-" onPress={decP}/>
        </>
    )
}