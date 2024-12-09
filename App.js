import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderSgb } from "./components/HeaderSgb";
import { Accueil } from "./components/Accueil/Accueil";
import { Article } from "./components/Article";
import { useState } from "react";
import logo from './assets/header/sgbLogo.png';
import homeIcon from './assets/footer/home_1946488.png';
import teamsIcon from './assets/footer/team.png';
import gamesIcon from './assets/footer/basketball-court_1202943.png';
import profileIcon from './assets/footer/user_1077063.png';
import {None} from "./components/None";
import {ApercuTeam} from "./components/DetailTeam/ApercuTeam";
import {DetailTeam} from "./components/DetailTeam/DetailTeam";
import {ListeTeams} from "./components/ListeTeam/ListeTeams";


function HomeScreen(navigation) {
    return (
        <Accueil />
    );
}
export default function App() {
    const [accueilVisible, setAccueilVisible] = useState(true);
    const [teamsVisible, setTeamsVisible] = useState(false);
    const [articleVisible, setArticleVisible] = useState(false);
    const [detailTeamVisible, setDetailTeamVisible] = useState(false);
    const [indexArticle, setIndexArticle] = useState(0);
    const [indexTeam, setIndexTeam] = useState(0);
    const afficherAccueil = () => {
        setAccueilVisible(true);
        setTeamsVisible(false);
        setArticleVisible(false);
        setDetailTeamVisible(false);
    }

    const afficherArticle = (index) => {

        setIndexArticle(index);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(true);
        setDetailTeamVisible(false);

    }

    const afficherTeam = () => {
        setAccueilVisible(false);
        setTeamsVisible(true);
        setArticleVisible(false);
        setDetailTeamVisible(false);
    }

    const afficherDetailTeam = (index) => {
        setIndexTeam(index);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(false);
        setDetailTeamVisible(true);
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
                    {teamsVisible ? <ListeTeams afficherTeam={afficherDetailTeam}/>:<None/>}
                    {detailTeamVisible ? <DetailTeam index={indexTeam} />:<None/>}

                </SafeAreaView>

                <SafeAreaView style={styles.footer}>
                    <TouchableOpacity onPress={afficherAccueil}>
                        <Image source={homeIcon} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={afficherTeam}>
                        <Image source={teamsIcon} style={[styles.footerIcon,{height: 25}]} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={gamesIcon} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={profileIcon} style={styles.footerIcon} />
                    </TouchableOpacity>
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
        flex: 1 / 11,
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'space-evenly',
    },
    footerIcon: {
        width: 40,
        height: 40,
    },
});