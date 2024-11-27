import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import {FicheTeam} from "../ListeTeam/FicheTeam";

type props = {
    style?: object;

    index: number;

}

export function ListeTeams({style,index}: props) {
    return(
        <SafeAreaView style={style}>
                <Text style={styles.title}>Equipe {index}</Text>
                //onglets
                //aperçu
                //liste des matchs
                //classement
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollViewTeam: {
        backgroundColor: '#e1e1e1',
        padding: 20,
        display: 'flex',
    },

    title: {
        fontSize: 30,
        color: '#636363',
        marginBottom: 20,
    }
});