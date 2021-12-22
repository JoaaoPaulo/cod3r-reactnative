import React from "react";
import {Text} from "react-native";
import Estilo from './estilo';

export default (props) => {
    console.warn(props);
    return (
    <Text style={Estilo.fontG}>
        A soma de max e min é: {props.min + props.max}!
    </Text>
    )
}