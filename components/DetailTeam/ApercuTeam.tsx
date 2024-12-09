import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import {ProchainMatch} from "./ProchainMatch";
import {FormeActuelle} from "./FormeActuelle";
import {ExtraitClassement} from "./ExtraitClassement";

type props = {
    style?: object;

    classemnt: any;
    index: number;
}

export function ApercuTeam({style,index,classemnt}: props) {
    return(
        <SafeAreaView style={ styles.view}>
            <ScrollView>
                <ProchainMatch index={index}/>
                <FormeActuelle index={index}/>
                <ExtraitClassement data={classemnt}/>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    view: {
        flex: 8/9,
        width: Dimensions.get('window').width - 20,




    },
    scrollViewTeam: {
        backgroundColor: '#e1e1e1',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',


    },

    title: {
        fontSize: 30,
        color: '#636363',
        marginBottom: 20,
    }
});