import {StyleSheet, Text, View} from "react-native";

type props = {
    equipe1: string;
    equipe2: string;
    score1?: number;
    score2?: number;
    date: string;
    heure: string;

}

export function FicheMatchListe({equipe1, equipe2, score1, score2, date, heure}: props) {
    return(
        <View style={styles.ficheMatch}>
            <View style={ [styles.elements,{width:'69%', alignItems: "flex-start", paddingLeft: 10}]}>
                <Text>{equipe1}</Text>
                <Text>{equipe2}</Text>
            </View>

                {score1 && score2 ?
                    <View style={[styles.elements,{width:'30%',marginLeft:0}]}>
                        <Text>{score1}</Text>
                        <Text>-</Text>
                        <Text>{score2}</Text>
                    </View>
                :
                    <View style={[styles.elements,{width:'30%', marginLeft:0 }]}>
                        <Text>{date.split("-").reverse().join("/")}</Text>
                        <Text>{heure.slice(0,2)}h{heure.slice(2)}</Text>
                    </View>
                }

        </View>
    )
}

const styles = StyleSheet.create({
    ficheMatch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        height: 80,

    },
    elements: {
        backgroundColor: 'lightgrey',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    }


});