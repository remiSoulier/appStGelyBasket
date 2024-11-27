import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";

type props = {
    style?: object;

    index: number;

}

export function ProchainMatch({style,index}: props) {
    return(
        <SafeAreaView style={style}>
            <Text>Championnat régional</Text>
            <View>
                <View>
                    <Image source={require('../../assets/equipes/sgbLogo.png')} style={{ width: 50, height: 50 }} />
                    <Text>Team 1</Text>
                </View>
                <View>
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