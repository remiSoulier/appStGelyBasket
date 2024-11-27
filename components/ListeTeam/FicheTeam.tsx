import {View, Text, Image, StyleSheet, Dimensions} from "react-native";
import React from "react";

const {width,height} = Dimensions.get("window");

type props = {
    style?: object;
    nom: string;
    estFavori: boolean;
}

export function FicheTeam({style, nom, estFavori}: props) {
    return(
        <View style={styles.fiche}>
            <Text style={styles.nomTeam}>{nom}</Text>
            <Image source={estFavori ? require('../../assets/etoile.png') : require('../../assets/etoileEmpty.png')} style={{height:50,width:50}}/>
        </View>
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