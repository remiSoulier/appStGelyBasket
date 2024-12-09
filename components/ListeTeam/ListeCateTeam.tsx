import {StyleSheet, Text, View} from "react-native";
import {FicheTeam} from "./FicheTeam";

type props ={
    style?:object;
    nom:string;
    listeTeams?:Array<[string,boolean]>;
    afficherTeam?: (index:number)=>void


}

export function ListeCateTeam({style,nom,listeTeams,afficherTeam}: props  ){
    return(
        <View style={styles.cateTeam}>
            <Text style={styles.nomCate} >{nom}</Text>
            <View style={styles.listeTeam}>
            {listeTeams?.map(([team,estFavori], index) => <FicheTeam key={index} nom={team} estFavori={estFavori}  afficherTeam={() => afficherTeam(index)}/>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cateTeam:{
        backgroundColor: "#b1b3b1",
        padding: 20,
        margin: 10,
    },
    nomCate:{
        fontSize: 20,
        color: "#fff"
    },
    listeTeam:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

    }

});