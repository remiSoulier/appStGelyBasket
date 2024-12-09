import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import React from "react";

const {width,height} = Dimensions.get("window");

type props = {
    style?: object;
    nom: string;
    estFavori: boolean;

    afficherTeam?: ()=>void

}

export function FicheTeam({style, nom, estFavori,afficherTeam}: props) {
    return(
        <TouchableOpacity style={style} onPress={afficherTeam}>
            <View style={styles.fiche}>
                <Text style={styles.nomTeam}>{nom}</Text>
                <Image source={estFavori ? require('../../assets/etoile.png') : require('../../assets/etoileEmpty.png')} style={{height:50,width:50}}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fiche:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width - 40,
        backgroundColor: "#109664",
        margin: 10,
        padding: 10,

    },
    nomTeam:{
        fontSize: 20,
        color: "#fff"
    }

}
);