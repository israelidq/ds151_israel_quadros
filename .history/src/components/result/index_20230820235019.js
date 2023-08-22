import { View, Text} from "react-native";
import React, { useState } from "react";

export default function ResultMedia(props) {
    return (
        <View>
            <Text>{props.resultMedia}</Text>
            <Text>{props.messageResultMedia}</Text>
        </View>
    );
}