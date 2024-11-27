import {StyleSheet, Text, View} from "react-native";
import {ListeArticles} from "./ListeArticles";
import {PreviewMatch} from "./PreviewMatch";

type props = {
    style?: object;
    afficherArticle?: (index: number) => void;
}

export function Accueil({style,afficherArticle}: props) {
    return(
        <View style={style}>
            <PreviewMatch style={styles.preview}/>
            <ListeArticles style={styles.liste} afficherArticle={afficherArticle} />
        </View>
    )
}

const styles = StyleSheet.create({
   preview: {
         flex: 1/4,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#636363',
         borderRadius: 10,
         margin: 10,
   },
   liste: {
         flex: 1,
         backgroundColor: '#e1e1e1',
         padding: 20,
   }
});