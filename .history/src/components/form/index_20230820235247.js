import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ResultMedia from "../result";

export default function Form() {

    const [media1, setmedia1] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messagemedia, setMessagemedia] = useState("preencha os dados")
    const [media, setmedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function mediaCalculator() {
        return setmedia((weight / (media1 * media1)).toFixed(2))
    }
    function validationmedia() {
        if (weight != null && media1 != null) {
            mediaCalculator()
            setMessagemedia("seu media eh igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setmedia(null)
        setTextButton("Calcular")
        setMessagemedia("preencha os dados")
    }


    return (
        //conteudo do formulario
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput onChangeText={setmedia} value={media1} placeholder="Ex: 70" keyboardType="numeric"></TextInput>
                <Text>Nota 2</Text>
                <TextInput onChangeText={setWeight} value={weight}  placeholder="Ex: 10" keyboardType="numeric"></TextInput>
                <Button title="Calcular Média" />
                <ResultMedia messageResultmedia={messagemedia} resultmedia={media}></ResultMedia>
            </View>
        </View>
    );
}