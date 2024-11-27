import {Image, StyleSheet, Text, View} from "react-native";


type props = {
    image: any;
}

export function HeaderSgb({image}: props) {
    return(
        <View style={styles.titleView}>
            <Text style={styles.titleText}>St Gely Basketball</Text>
            <Image source={image} style={{width: 50, height: 50}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleView: {
     backgroundColor: '#109664',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'space-around',
     flexDirection: 'row',

   },
   titleText: {
     color: 'white',
     fontSize: 24,
     fontWeight: 'bold',
   },

});

