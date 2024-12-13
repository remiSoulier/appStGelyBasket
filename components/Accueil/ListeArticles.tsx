import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {FicheArticle} from "./FicheArticle";
import {useNavigation} from "@react-navigation/native";
import App from "../../App";

type props = {
    style?: object;
    afficherArticle?: (index: number) => void;

}

export function ListeArticles({style,afficherArticle}: props) {

    const navigation = useNavigation();
    return(
        <SafeAreaView style={style}>
            <ScrollView contentContainerStyle={styles.scrollViewArticle} showsVerticalScrollIndicator={false}>
                <FicheArticle title="Article 1" image={require('../../assets/articles/image.png')} style={styles.article} onPress={() => afficherArticle(1)}/>
                <FicheArticle title="Article 2" image={require('../../assets/articles/image.png')} style={styles.article} onPress={() => afficherArticle(2)}/>
                <FicheArticle title="Article 3" image={require('../../assets/articles/image.png')} style={styles.article} onPress={() => afficherArticle(3)}/>
                <FicheArticle title="Article 4" image={require('../../assets/articles/image.png')} style={styles.article} onPress={() => afficherArticle(4)}/>
                <FicheArticle title="Article 5" image={require('../../assets/articles/image.png')} style={styles.article} onPress={() => afficherArticle(5)}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollViewArticle: {
        backgroundColor: '#e1e1e1',
        padding: 20,
        display: 'flex',
    },

    article: {
        backgroundColor: '#636363',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        width: '100%',
        marginBottom: 10,
        borderRadius: 10,

    },
});