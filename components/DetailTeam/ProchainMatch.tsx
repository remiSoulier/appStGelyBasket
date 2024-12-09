import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

type props = {
    style?: object;

    index: number;

}

export function ProchainMatch({style,index}: props) {
    return(
        <SafeAreaView style={styles.view}>
            <Text>Championnat régional</Text>
            <View style={styles.elements}>
                <View>
                    <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
                    <Text>Team 1</Text>
                </View>
                <View style={{alignItems:"center",justifyContent:"center"}}>
                    <Text>15/10/2021</Text>
                    <Text>20h</Text>
                </View>
                <View>
                    <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
                    <Text>Team 2</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        height: 150,
        width: '100%',

    },
    elements: {

        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',

    }
});