import {Image, StyleSheet, Text, View} from "react-native";

type props = {
    style?: object;
}

export function PreviewMatch({style}: props) {
    return(
        <View style={style}>
            <View style={styles.vueMatch}>
                <View style={styles.vueEquipe}>
                    <Image source={require('../../assets/equipes/sgbLogo.png')} style={{width: 50, height: 50}}/>
                    <Text>Equipe 1</Text>
                </View>
                <Text>VS</Text>
                <View style={styles.vueEquipe}>
                    <Image source={require('../../assets/equipes/sgbLogo.png')} style={{width: 50, height: 50}}/>
                    <Text>Equipe 2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vueEquipe: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    vueMatch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
});