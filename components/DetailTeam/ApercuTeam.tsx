import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {ProchainMatch} from "./ProchainMatch";

type props = {
    style?: object;

    index: number;
}

export function ListeTeams({style,index}: props) {
    return(
        <SafeAreaView style={style}>
            <ScrollView contentContainerStyle={styles.scrollViewTeam}>
                <ProchainMatch index={index} />
                //forme actuelle

                //classement
            </ScrollView>
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