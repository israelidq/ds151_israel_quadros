import React from "react"
import { View, Text } from "react-native"

export default function Form(){
    return (
        //conteudo do formulario
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput placeholder = "Ex. 70" keyboardType = "numeric"></TextInput>
                <Text>Nota 2</Text>
                <TextInput placeholder = "Ex. 10" keyboardType = "numeric"></TextInput>
            </View>
        </View>
    );
}