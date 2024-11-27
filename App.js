import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderSgb } from "./components/HeaderSgb";
import { Accueil } from "./components/Accueil/Accueil";
import { Article } from "./components/Article";
import { useState } from "react";
import logo from './assets/header/sgbLogo.png';
import homeIcon from './assets/footer/home_1946488.png';
import teamsIcon from './assets/footer/candidates_2258579.png';
import gamesIcon from './assets/footer/basketball-court_1202943.png';
import profileIcon from './assets/footer/user_1077063.png';
import {ListeTeams} from "./components/ListeTeam/ListeTeams";
import {None} from "./components/None";


function HomeScreen(navigation) {
    return (
        <Accueil />
    );
}
export default function App() {
    const [accueilVisible, setAccueilVisible] = useState(true);
    const [teamsVisible, setTeamsVisible] = useState(false);
    const [articleVisible, setArticleVisible] = useState(false);
    const [indexArticle, setIndexArticle] = useState(0);
    const afficherAccueil = () => {
        setAccueilVisible(true);
        setTeamsVisible(false);
        setArticleVisible(false);
    }

    const afficherArticle = (index) => {

        setIndexArticle(index);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(true);

    }

    const afficherTeam = () => {
        setAccueilVisible(false);
        setTeamsVisible(true);
        setArticleVisible(false);
    }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <SafeAreaView style={styles.mainView}>
                <SafeAreaView style={styles.header}>
                    <HeaderSgb image={logo} />
                </SafeAreaView>

                <SafeAreaView style={styles.container}>
                    {accueilVisible ? <Accueil afficherArticle={afficherArticle} /> : <None/>}
                    {articleVisible ? <Article index={indexArticle} />:<None/>}
                    {teamsVisible ? <ListeTeams/>:<None/>}

                </SafeAreaView>

                <SafeAreaView style={styles.footer}>
                    <Button title={'Home'} source={homeIcon} style={styles.footerIcon} onPress={afficherAccueil} />
                    <Button title={'Teams'} source={teamsIcon} style={styles.footerIcon} onPress={afficherTeam} />
                    <Button title={'Games'} source={gamesIcon} style={styles.footerIcon} />
                    <Button title={'Profile'} source={profileIcon} style={styles.footerIcon} />
                </SafeAreaView>

                <StatusBar style="auto" />
            </SafeAreaView>


        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flex: 12 / 100,
    },
    container: {
        backgroundColor: '#e1e1e1',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 8 / 10,
    },
    footer: {
        backgroundColor: '#109664',
        flex: 1 / 10,
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'space-evenly',
    },
    footerIcon: {
        width: 50,
        height: 50,
    },
});