import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha os dados")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")


    return (
        //conteudo do formulario
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput placeholder="Ex: 70" keyboardType="numeric"></TextInput>
                <Text>Nota 2</Text>
                <TextInput placeholder="Ex: 10" keyboardType="numeric"></TextInput>
                <Button title="Calcular Média" />
                <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
            </View>
        </View>
    );
}