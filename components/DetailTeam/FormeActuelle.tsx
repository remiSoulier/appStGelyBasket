import {SafeAreaView, View} from "react-native";

type props = {
    style?: object;

    index: number;
}

export function FormeActuelle({style,index}: props) {
    return(
        <SafeAreaView style={style}>
            <View>
                
            </View>
        </SafeAreaView>
    )
}