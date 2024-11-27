import {Text, Image, View, ImageSourcePropType, TouchableOpacity} from "react-native";
import React from "react";

type Props = {
    title: string;
    image: ImageSourcePropType;
    onPress?: () => void;
    style?: object;
}
export function FicheArticle({ title, image, style,onPress}: Props) {
    return(
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={{width:100}}>{title}</Text>
            <Image source={image} style={{width: 100, height: 100}} />
        </TouchableOpacity>
    )
}