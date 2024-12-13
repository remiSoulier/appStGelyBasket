import {TouchableOpacity, Text, StyleSheet,Dimensions} from "react-native";
import React, {useState} from "react";

type props = {
    date: string;
    onPress: () => void;
    style?: object;

}

export function DateTab({date,onPress,style}: props) {




    return(
        <TouchableOpacity onPress={onPress} style={style} >
            <Text style={[styles.text]}>{date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
});

