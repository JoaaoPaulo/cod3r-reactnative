import React from "react";
import {Button} from "react-native";
import Estilo from './estilo';

export default(props) => {

    function executar() {
        console.warn('exec #01!!!');
    }

    return (
        <> 
        
        <Button title = 'Executar! #01' onPress = {
            executar
        }/> 
        
        <Button
            title='Executar #02'
            onPress={function () {
                console.warn('exec #02!!!');
            }}/>

        <Button
            title='Executar #03'
            onPress={() => console.warn('exec #03!!!')}/>
    </>
    )
}