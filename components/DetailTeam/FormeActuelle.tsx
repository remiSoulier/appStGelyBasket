import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";

type props = {
    style?: object;

    index: number;
}

export function FormeActuelle({style,index}: props) {
    return(
        <SafeAreaView style={styles.view}>
            <View style={styles.elements}>
                <Image source={require('../../assets/results/red.png')} style={styles.result} />
                <Text>56-23</Text>
                <Text>VS</Text>
                <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.elements}>
                <Image source={require('../../assets/results/red.png')} style={styles.result} />
                <Text>56-23</Text>
                <Text>VS</Text>
                <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.elements}>
                <Image source={require('../../assets/results/green.png')} style={styles.result} />
                <Text>56-23</Text>
                <Text>VS</Text>
                <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        height: 150,
        width: '100%',

    },
    elements: {

        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        width: '30%',
        height: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 15,

    },
    result: {
        width: 20,
        height: 20,
    }
});