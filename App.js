import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
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
import {ListeMatchs} from "./components/ListeMatchs/ListeMatchs";

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
    const [listeMatchsVisible,setListeMatchsVisible] = useState(false);
    const afficherAccueil = () => {
        setAccueilVisible(true);
        setTeamsVisible(false);
        setArticleVisible(false);
        setDetailTeamVisible(false);
        setListeMatchsVisible(false);

    }

    const afficherArticle = (index) => {

        setIndexArticle(index);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(true);
        setDetailTeamVisible(false);
        setListeMatchsVisible(false);


    }

    const afficherTeam = () => {
        setAccueilVisible(false);
        setTeamsVisible(true);
        setArticleVisible(false);
        setDetailTeamVisible(false);
        setListeMatchsVisible(false);

    }

    const afficherDetailTeam = (index) => {
        setIndexTeam(index);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(false);
        setDetailTeamVisible(true);
        setListeMatchsVisible(false);
    }

    const afficherListeMatchs = () => {
        setListeMatchsVisible(true);
        setAccueilVisible(false);
        setTeamsVisible(false);
        setArticleVisible(false);
        setDetailTeamVisible(false);
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
                    {listeMatchsVisible ? <ListeMatchs matchs={dataMatchs}/>:<None/>}

                </SafeAreaView>

                <SafeAreaView style={styles.footer}>
                    <TouchableOpacity onPress={afficherAccueil}>
                        <Image source={homeIcon} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={afficherTeam}>
                        <Image source={teamsIcon} style={[styles.footerIcon,{height: 25}]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={afficherListeMatchs}>
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
        width: 0.5 * (Dimensions.get('window').height / 11),
        height: 0.5 * (Dimensions.get('window').height / 11),
    },
});




const dataMatchs = [
    {
        "date": "05/10/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "IE - ST ANDRE BASKET COEUR D HERAULT - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": 19,
                "score2": 42
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "AS CHEMINOTS BEZIERS BASKET - 1",
                "horaire": "1100",
                "score1": 15,
                "score2": 82
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "930",
                "score1": 43,
                "score2": 53
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "LE CRES BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1100",
                "score1": 16,
                "score2": 90
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "CANET RBC - 1",
                "horaire": "2000",
                "score1": 91,
                "score2": 61
            },
            {
                "categorie": "PRF",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "2000",
                "score1": 42,
                "score2": 49
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "NIMES BASKET - 1",
                "horaire": "1430",
                "score1": 54,
                "score2": 46
            },
            {
                "categorie": "RM2",
                "equipe1": "NIMES BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1800",
                "score1": 64,
                "score2": 73
            }
        ]
    },
    {
        "date": "12/10/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "horaire": "1230",
                "score1": 34,
                "score2": 84
            },
            {
                "categorie": "DMU11",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1230",
                "score1": 70,
                "score2": 25
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "MONTPELLIER BASKET MOSSON - 2",
                "horaire": "1100",
                "score1": 66,
                "score2": 20
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - CTC VERGEZE MILHAUT BASKET-BALL - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": 0,
                "score2": 0
            },
            {
                "categorie": "PRF",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "ASPTT MONTPELLIER - 2",
                "horaire": "1900",
                "score1": 82,
                "score2": 26
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC ELAN AVEYRON BASKET - 1",
                "horaire": "1700",
                "score1": 62,
                "score2": 68
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "CASTELNAU BASKET - 2",
                "horaire": "2100",
                "score1": 76,
                "score2": 70
            }
        ]
    },
    {
        "date": "09/11/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "BASKET LATTES MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1145",
                "score1": 78,
                "score2": 15
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "CASTELNAU BASKET - 2",
                "horaire": "1230",
                "score1": 18,
                "score2": 44
            },
            {
                "categorie": "DFU18",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "SO MILLAU - 1",
                "horaire": "1630",
                "score1": 51,
                "score2": 46
            },
            {
                "categorie": "DMU11",
                "equipe1": "AGDE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "horaire": "1100",
                "score1": 71,
                "score2": 36
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "CLAPIERS BASKET BALL - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1400",
                "score1": 54,
                "score2": 29
            },
            {
                "categorie": "PNM",
                "equipe1": "ST ESTEVE BC - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2100",
                "score1": 66,
                "score2": 111
            },
            {
                "categorie": "PRF",
                "equipe1": "LE CRES BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1800",
                "score1": 27,
                "score2": 47
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "IE - CTC VERGEZE MILHAUD BASKET-BALL",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": 53,
                "score2": 61
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - ETOILE SPORTIVE GIMONTOISE BB - 1",
                "horaire": "1430",
                "score1": 39,
                "score2": 62
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC CEVENNES BASKET-BALL",
                "horaire": "1230",
                "score1": 75,
                "score2": 41
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "2000",
                "score1": 71,
                "score2": 52
            }
        ]
    },
    {
        "date": "16/11/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "CASTELNAU BASKET - 1",
                "horaire": "930",
                "score1": 70,
                "score2": 30
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "SPORT CLUB DE SETE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1330",
                "score1": 80,
                "score2": 11
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "CASTELNAU BASKET - 2",
                "horaire": "1100",
                "score1": 14,
                "score2": 37
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 4",
                "horaire": "1230",
                "score1": 72,
                "score2": 6
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "MAUGUIO BASKET - 1",
                "horaire": "1300",
                "score1": 40,
                "score2": 41
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "IE - BASKET CLUB FLORENSAC - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1630",
                "score1": 34,
                "score2": 35
            },
            {
                "categorie": "DXU9",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1230",
                "score1": 38,
                "score2": 11
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2100",
                "score1": 71,
                "score2": 79
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC CEVENNES BASKET-BALL",
                "horaire": "1700",
                "score1": 43,
                "score2": 47
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - CTC ELAN COLOMIERS TOURNEFEUILLE BASKET - U.S. COLOMIERS BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1500",
                "score1": 49,
                "score2": 53
            },
            {
                "categorie": "RMU13",
                "equipe1": "CASTELNAU BASKET",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1500",
                "score1": 39,
                "score2": 110
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "SO MILLAU - 1",
                "horaire": "1900",
                "score1": 83,
                "score2": 77
            }
        ]
    },
    {
        "date": "23/11/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": 28,
                "score2": 38
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "FO PISCENOIS - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1500",
                "score1": 72,
                "score2": 13
            },
            {
                "categorie": "DFU18",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "PEROLS BASKET - 1",
                "horaire": "1800",
                "score1": 36,
                "score2": 66
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "CASTELNAU BASKET - 1",
                "horaire": "1400",
                "score1": 50,
                "score2": 51
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "PEROLS BASKET - 2",
                "horaire": "1600",
                "score1": 31,
                "score2": 43
            },
            {
                "categorie": "DXU9",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "SPORT CLUB DE SETE BASKET - 1",
                "horaire": "1230",
                "score1": 16,
                "score2": 31
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "PEROLS BASKET - 1",
                "horaire": "2000",
                "score1": 66,
                "score2": 74
            }
        ]
    },
    {
        "date": "30/11/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - ST ANDRE BASKET COEUR D HERAULT - 1",
                "horaire": "1100",
                "score1": 27,
                "score2": 44
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "AS CHEMINOTS BEZIERS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 106,
                "score2": 8
            },
            {
                "categorie": "DFU18",
                "equipe1": "ASPTT MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1630",
                "score1": 51,
                "score2": 41
            },
            {
                "categorie": "DMU11",
                "equipe1": " - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "horaire": "1230",
                "score1": 50,
                "score2": 30
            },
            {
                "categorie": "PNM",
                "equipe1": "SAINT GILLES BASKET CLUB - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": 81,
                "score2": 80
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "BASKET LATTES MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1630",
                "score1": 84,
                "score2": 33
            },
            {
                "categorie": "RFU18",
                "equipe1": "CASTRES BASKET CLUB - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1430",
                "score1": 43,
                "score2": 58
            },
            {
                "categorie": "RMU13",
                "equipe1": "TOULOUGES BA",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1315",
                "score1": 91,
                "score2": 88
            }
        ]
    },
    {
        "date": "07/12/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1400",
                "score1": 75,
                "score2": 17
            },
            {
                "categorie": "DFU18",
                "equipe1": "IE - AS CHEMINOTS BEZIERS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1700",
                "score1": 71,
                "score2": 20
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "FO PISCENOIS - 1",
                "horaire": "1230",
                "score1": 67,
                "score2": 28
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "MAUGUIO BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 50,
                "score2": 20
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "AGDE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 38,
                "score2": 35
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "BASKET PAYS DE LUNEL - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1200",
                "score1": 74,
                "score2": 16
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "CANET RBC",
                "horaire": "1900",
                "score1": 45,
                "score2": 68
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "TOULOUGES BA - 2",
                "horaire": "2100",
                "score1": 84,
                "score2": 77
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "SO MILLAU",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1200",
                "score1": 60,
                "score2": 48
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "1630",
                "score1": 69,
                "score2": 64
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC CENTRE HERAULT BASKET - 1",
                "horaire": "1430",
                "score1": 143,
                "score2": 45
            },
            {
                "categorie": "RM2",
                "equipe1": "GARONS BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "2000",
                "score1": 74,
                "score2": 82
            }
        ]
    },
    {
        "date": "14/12/2024",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "BASKET LATTES MONTPELLIER - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "CASTELNAU BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "AS CHEMINOTS BEZIERS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1600",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "PEROLS BASKET - 1",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 3",
                "horaire": "1230",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DXU9",
                "equipe1": "CASTELNAU BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "930",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRF",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 3",
                "horaire": "1900",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "11/01/2025",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "CASTELNAU BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "SPORT CLUB DE SETE BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "ASSOCIATION SPORTIVE SERVIAN BASKET - 1",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "BASKET PAYS DE LUNEL - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DXU9",
                "equipe1": "SPORT CLUB DE SETE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "FRONTIGNAN LA PEYRADE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "UZES BASKET CLUB",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "NIMES BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "NIMES BASKET - 2",
                "horaire": "2000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "18/01/2025",
        "matchs": [
            {
                "categorie": "DFU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DFU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "FO PISCENOIS - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DFU18",
                "equipe1": "MONTPELLIER BASKET MOSSON - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "LE CRES BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "SPORT CLUB DE SETE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "NIMES BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2030",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRF",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "LE CRES BASKET - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1800",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - CTC ELAN AVEYRON BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RM2",
                "equipe1": "CASTELNAU BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "2100",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "01/02/2025",
        "matchs": [
            {
                "categorie": "DFU18",
                "equipe1": "SO MILLAU - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "MONTPELLIER BASKET MOSSON - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "LES LOUPS DU PIC OCCIDENTAL BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "CLAPIERS BASKET BALL - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DXU9",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - LA CROIX D'ARGENT B MONTPELLIER - 1",
                "horaire": "2100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "BC NARBONNE MEDITERRANEE",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC HORIZON TOULOUSE NORD EST BASKET - 1",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - MONTPELLIER BASKET MOSSON - 1",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "horaire": "1830",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "08/03/2025",
        "matchs": [
            {
                "categorie": "DFU18",
                "equipe1": "PEROLS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "MONTPELLIER BASKET MOSSON - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "CASTELNAU BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "ASSOCIATION SPORTIVE SERVIAN BASKET - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "PEROLS BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "SPORT CLUB DE SETE BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DXU9",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "CASTELNAU BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "BASKET PAYS DE LUNEL - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "IE - CTC CEVENNES BASKET-BALL",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "CASTRES BASKET CLUB - 1",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "CASTELNAU BASKET",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "15/03/2025",
        "matchs": [
            {
                "categorie": "DFU18",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "ASPTT MONTPELLIER - 1",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "CASTELNAU BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "ASPTT MONTPELLIER - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "ST ESTEVE BC - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "SPORT CLUB DE SETE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "BASKET LATTES MONTPELLIER - 1",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "TOULOUGES BA",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "29/03/2025",
        "matchs": [
            {
                "categorie": "DFU18",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - AS CHEMINOTS BEZIERS BASKET - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": " - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1230",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1230",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "AGDE BASKET - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "BASKET PAYS DE LUNEL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "SAINT GILLES BASKET CLUB - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "SO MILLAU",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC CENTRE HERAULT BASKET - 1",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "03/05/2025",
        "matchs": [
            {
                "categorie": "DFU18",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "MONTPELLIER BASKET MOSSON - 1",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "AS CHEMINOTS BEZIERS BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "PEROLS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "LES LOUPS DU PIC OCCIDENTAL BASKET - 1",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "SPORT CLUB DE SETE BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "NIMES BASKET - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "28/09/2024",
        "matchs": [
            {
                "categorie": "DMU11",
                "equipe1": "ASSOCIATION SPORTIVE SERVIAN BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1830",
                "score1": 94,
                "score2": 40
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "BASKET PAYS DE LUNEL - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 53,
                "score2": 31
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - LA CROIX D'ARGENT B MONTPELLIER - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2100",
                "score1": 67,
                "score2": 83
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1530",
                "score1": 53,
                "score2": 56
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "GARONS BASKET - 1",
                "horaire": "2000",
                "score1": 56,
                "score2": 53
            }
        ]
    },
    {
        "date": "17/11/2024",
        "matchs": [
            {
                "categorie": "DMU11",
                "equipe1": "MONTPELLIER BASKET MOSSON - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "900",
                "score1": 32,
                "score2": 67
            },
            {
                "categorie": "DMU15",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "900",
                "score1": 35,
                "score2": 46
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "CASTELNAU BASKET - 2",
                "horaire": "1100",
                "score1": 54,
                "score2": 36
            },
            {
                "categorie": "DMU18",
                "equipe1": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": 61,
                "score2": 73
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1500",
                "score1": 17,
                "score2": 82
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "VEAUCHE CRAP - 1",
                "horaire": "1530",
                "score1": 70,
                "score2": 73
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "OLYMPIQUE CARROS BASKET BALL - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": 69,
                "score2": 66
            },
            {
                "categorie": "PRF",
                "equipe1": "PEROLS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1200",
                "score1": 45,
                "score2": 50
            },
            {
                "categorie": "PRM",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "900",
                "score1": 45,
                "score2": 61
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "MONTPELLIER BASKET MOSSON",
                "horaire": "1730",
                "score1": 54,
                "score2": 126
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "LITTORAL CAMARGUE BASKET - 1",
                "horaire": "1315",
                "score1": 40,
                "score2": 42
            }
        ]
    },
    {
        "date": "08/02/2025",
        "matchs": [
            {
                "categorie": "DMU11",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "AGDE BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 4",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "MAUGUIO BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "IE - BASKET CLUB FLORENSAC - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "CANET RBC - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1700",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRF",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "CASTELNAU BASKET - 3",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC VERGEZE MILHAUD BASKET-BALL",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ETOILE SPORTIVE GIMONTOISE BB - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC CEVENNES BASKET-BALL",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "horaire": "1600",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RM2",
                "equipe1": "SO MILLAU - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "2000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "05/04/2025",
        "matchs": [
            {
                "categorie": "DMU11",
                "equipe1": "FO PISCENOIS - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "MAUGUIO BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU11-3",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "CLAPIERS BASKET BALL - 1",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU13-2",
                "equipe1": "CASTELNAU BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "TOULOUGES BA - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU15-2",
                "equipe1": "UZES BASKET CLUB",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "20/10/2024",
        "matchs": [
            {
                "categorie": "DMU11-2",
                "equipe1": "ASPTT MONTPELLIER - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 47,
                "score2": 34
            }
        ]
    },
    {
        "date": "25/01/2025",
        "matchs": [
            {
                "categorie": "DMU11-3",
                "equipe1": "CLAPIERS BASKET BALL - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1430",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU15",
                "equipe1": "CLAPIERS BASKET BALL - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PNM",
                "equipe1": "UZES BASKET CLUB - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RM2",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1900",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "24/11/2024",
        "matchs": [
            {
                "categorie": "DMU13-2",
                "equipe1": "ASSOCIATION SPORTIVE SERVIAN BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1200",
                "score1": 26,
                "score2": 53
            },
            {
                "categorie": "DMU15",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "CLAPIERS BASKET BALL - 1",
                "horaire": "900",
                "score1": 54,
                "score2": 90
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 2",
                "horaire": "1100",
                "score1": 70,
                "score2": 33
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "AS CHEMINOTS BEZIERS BASKET - 2",
                "horaire": "1300",
                "score1": 77,
                "score2": 45
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "SPORT CLUB DE SETE BASKET - 2",
                "horaire": "1500",
                "score1": 66,
                "score2": 49
            },
            {
                "categorie": "RMU21",
                "equipe1": "CASTELNAU BASKET",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1500",
                "score1": 83,
                "score2": 54
            }
        ]
    },
    {
        "date": "15/12/2024",
        "matchs": [
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "CASTELNAU BASKET - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU15",
                "equipe1": "SO MILLAU - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1400",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "LE CRES BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET",
                "horaire": "1500",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "12/01/2025",
        "matchs": [
            {
                "categorie": "DMU13-2",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 1",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU15",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "IE - BASKET CLUB FLORENSAC - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "900",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "AL SAINT PRIEST",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "ST GENIS OULLINS STE FOY FEMININ",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRF",
                "equipe1": "ASPTT MONTPELLIER - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "MONTPELLIER BASKET MOSSON - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "BASKET PAYS DE LUNEL",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "SO MILLAU",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "10/11/2024",
        "matchs": [
            {
                "categorie": "DMU15",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "SO MILLAU - 1",
                "horaire": "1200",
                "score1": 89,
                "score2": 37
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "IE - ST ANDRE BASKET COEUR D HERAULT - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 43,
                "score2": 60
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "horaire": "1400",
                "score1": 84,
                "score2": 73
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "FO PISCENOIS - 2",
                "horaire": "1600",
                "score1": 64,
                "score2": 51
            },
            {
                "categorie": "NF3",
                "equipe1": "CERCLE SPORTIF DE L'OZON - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": 39,
                "score2": 44
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "PAYS VOIRONNAIS BASKET CLUB - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": 64,
                "score2": 73
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "SPORT CLUB DE SETE BASKET - 1",
                "horaire": "1000",
                "score1": 0,
                "score2": 0
            },
            {
                "categorie": "RMU21",
                "equipe1": "UZES BASKET CLUB",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1500",
                "score1": 127,
                "score2": 53
            },
            {
                "categorie": "RF2",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": 38,
                "score2": 66
            }
        ]
    },
    {
        "date": "01/12/2024",
        "matchs": [
            {
                "categorie": "DMU15",
                "equipe1": "IE - ST ANDRE BASKET COEUR D HERAULT - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1000",
                "score1": 79,
                "score2": 61
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "IE - ETOILE SPORTIVE PAULHAN BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 47,
                "score2": 68
            },
            {
                "categorie": "DMU18",
                "equipe1": "MAUGUIO BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1000",
                "score1": 52,
                "score2": 96
            },
            {
                "categorie": "DMU18-2",
                "equipe1": " - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "ST CHAMOND BASKET VALLEE DU GIER - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": 77,
                "score2": 39
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - CTC MARSEILLE METROPOLE",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": 78,
                "score2": 65
            },
            {
                "categorie": "PRF",
                "equipe1": "CASTELNAU BASKET - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1800",
                "score1": 53,
                "score2": 36
            },
            {
                "categorie": "PRM",
                "equipe1": "AS CHEMINOTS BEZIERS BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1100",
                "score1": 58,
                "score2": 69
            },
            {
                "categorie": "RMU21",
                "equipe1": "IE - VERGEZE BASKET CLUB",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1300",
                "score1": 45,
                "score2": 107
            },
            {
                "categorie": "RF2",
                "equipe1": "NIMES BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 51,
                "score2": 59
            }
        ]
    },
    {
        "date": "08/12/2024",
        "matchs": [
            {
                "categorie": "DMU15",
                "equipe1": "AS CHEMINOTS BEZIERS BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1100",
                "score1": 70,
                "score2": 48
            },
            {
                "categorie": "DMU18",
                "equipe1": "BASKET PAYS DE LUNEL - 2",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1100",
                "score1": 78,
                "score2": 81
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - CTC MEYLAN ECHIROLLES LA TRONCHE 38 - BC LA TRONCHE MEYLAN - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": 45,
                "score2": 74
            },
            {
                "categorie": "PRM",
                "equipe1": "FRONTIGNAN LA PEYRADE BASKET - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "930",
                "score1": 73,
                "score2": 58
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "BC RIVESALTES",
                "horaire": "1500",
                "score1": 68,
                "score2": 97
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "BASKET PAYS DE LUNEL",
                "horaire": "1315",
                "score1": 71,
                "score2": 45
            }
        ]
    },
    {
        "date": "02/02/2025",
        "matchs": [
            {
                "categorie": "DMU15",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "IE - ST ANDRE BASKET COEUR D HERAULT - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - ST ANDRE BASKET COEUR D HERAULT - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "FO PISCENOIS - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "PONTOISE ULR BASKET ST JUST ST RAMBERT - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - CTC CLERMONT SUD GERGOVIE BASKET - BB COURNON D'AUVERGNE - 1",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRF",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "PEROLS BASKET - 1",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "CASTELNAU BASKET - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "FO PISCENOIS",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "09/02/2025",
        "matchs": [
            {
                "categorie": "DMU15",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "AS CHEMINOTS BEZIERS BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU15-2",
                "equipe1": "CASTELNAU BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "CASTELNAU BASKET - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "OLYMPIQUE CARROS BASKET BALL - 1",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "CLAPIERS BASKET BALL - 1",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "MAUGUIO BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "19/01/2025",
        "matchs": [
            {
                "categorie": "DMU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "LE CRES BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "FRONTIGNAN LA PEYRADE BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1330",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - ST ANDRE BASKET COEUR D HERAULT - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "St REMY SPORTS BASKET - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - CTC LITTORAL VAR BASKET  - LA SEYNE BASKET - 1",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - BASKET CLUB FABREGUES - 2",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - CTC CABESTANY - ELNE",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "09/03/2025",
        "matchs": [
            {
                "categorie": "DMU15-2",
                "equipe1": "ASSOCIATION BASKET SAUVIAN SERIGNAN LITTORAL - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "AS CHEMINOTS BEZIERS BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "IE - FRAISSES-UNIEUX BASKET 42 - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "ST GENIS OULLINS STE FOY FEMININ",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - SJVBA ST JEAN DE VEDAS BASKET - 2",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "MONTPELLIER BASKET MOSSON",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC CENTRE HERAULT BASKET - ETOILE SPORTIVE PAULHAN BASKET - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "16/03/2025",
        "matchs": [
            {
                "categorie": "DMU15-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - ETOILE SPORTIVE PAULHAN BASKET - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "MAUGUIO BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": " - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "CASTELNAU BASKET",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "04/05/2025",
        "matchs": [
            {
                "categorie": "DMU15-2",
                "equipe1": "LE CRES BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "FRONTIGNAN LA PEYRADE BASKET - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "IE - ST ANDRE BASKET COEUR D HERAULT - 2",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "AL SAINT PRIEST",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - CTC CLERMONT SUD GERGOVIE BASKET - BB COURNON D'AUVERGNE - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "FRONTIGNAN LA PEYRADE BASKET - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "BASKET PAYS DE LUNEL",
                "horaire": "1500",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "BASKET PAYS DE LUNEL",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "30/03/2025",
        "matchs": [
            {
                "categorie": "DMU18",
                "equipe1": "ST GELY BASKETBALL - 1",
                "equipe2": "BASKET PAYS DE LUNEL - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NF3",
                "equipe1": "VEAUCHE CRAP - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "BC RIVESALTES",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "LITTORAL CAMARGUE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "06/04/2025",
        "matchs": [
            {
                "categorie": "DMU18",
                "equipe1": "LE CRES BASKET - 1",
                "equipe2": "ST GELY BASKETBALL - 1",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "DMU18-2",
                "equipe1": "ST GELY BASKETBALL - 2",
                "equipe2": "IE - BASKET CLUB FLORENSAC - 2",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "FC LYON ASVEL FEMININ - 1",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "AS CHEMINOTS BEZIERS BASKET - 2",
                "horaire": "1300",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "NIMES BASKET - 2",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "22/09/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "St REMY SPORTS BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": 55,
                "score2": 48
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "PAYS VOIRONNAIS BASKET CLUB - 1",
                "horaire": "1315",
                "score1": 76,
                "score2": 61
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "IE - CTC CABESTANY - ELNE",
                "horaire": "1530",
                "score1": 64,
                "score2": 42
            }
        ]
    },
    {
        "date": "29/09/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "PONTOISE ULR BASKET ST JUST ST RAMBERT - 1",
                "horaire": "1530",
                "score1": 63,
                "score2": 74
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "OLYMPIQUE CARROS BASKET BALL - 1",
                "horaire": "1315",
                "score1": 93,
                "score2": 80
            },
            {
                "categorie": "PRM",
                "equipe1": "CASTELNAU BASKET - 3",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1100",
                "score1": 40,
                "score2": 65
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 2",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1300",
                "score1": 43,
                "score2": 46
            }
        ]
    },
    {
        "date": "06/10/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "CASTELNAU BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1600",
                "score1": 66,
                "score2": 63
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - CTC MARSEILLE METROPOLE",
                "horaire": "1315",
                "score1": 91,
                "score2": 49
            },
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "CLAPIERS BASKET BALL - 1",
                "horaire": "1100",
                "score1": 58,
                "score2": 67
            },
            {
                "categorie": "RMU21",
                "equipe1": "IE - CTC CEVENNES BASKET-BALL",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1100",
                "score1": 75,
                "score2": 56
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "MAUGUIO BASKET - 2",
                "horaire": "1530",
                "score1": 46,
                "score2": 47
            }
        ]
    },
    {
        "date": "13/10/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "ROANNAIS BASKET FEMININ - 2",
                "horaire": "1530",
                "score1": 60,
                "score2": 53
            },
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - CTC MEYLAN ECHIROLLES LA TRONCHE 38 - BC LA TRONCHE MEYLAN - 1",
                "horaire": "1315",
                "score1": 97,
                "score2": 46
            },
            {
                "categorie": "PRM",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - SJVBA ST JEAN DE VEDAS BASKET - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1130",
                "score1": 67,
                "score2": 76
            },
            {
                "categorie": "RMU21",
                "equipe1": "FO PISCENOIS",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1300",
                "score1": 91,
                "score2": 48
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - CTC CENTRE HERAULT BASKET - ETOILE SPORTIVE PAULHAN BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "1530",
                "score1": 54,
                "score2": 49
            }
        ]
    },
    {
        "date": "27/10/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "AL GERLAND MOUCHE LYON - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": 69,
                "score2": 54
            }
        ]
    },
    {
        "date": "02/11/2024",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - FRAISSES-UNIEUX BASKET 42 - 1",
                "horaire": "1600",
                "score1": 53,
                "score2": 79
            },
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "BASKET PAYS DE LUNEL - 1",
                "horaire": "2100",
                "score1": 101,
                "score2": 63
            },
            {
                "categorie": "RM2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "LA CROIX D'ARGENT B MONTPELLIER - 2",
                "horaire": "1900",
                "score1": 76,
                "score2": 60
            }
        ]
    },
    {
        "date": "23/02/2025",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "ROANNAIS BASKET FEMININ - 2",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "01/03/2025",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "AL GERLAND MOUCHE LYON - 1",
                "horaire": "1600",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "23/03/2025",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "CERCLE SPORTIF DE L'OZON - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "IE - CTC LITTORAL VAR BASKET  - LA SEYNE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "IE - VERGEZE BASKET CLUB",
                "horaire": "1500",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "13/04/2025",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "ST CHAMOND BASKET VALLEE DU GIER - 1",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "20/04/2025",
        "matchs": [
            {
                "categorie": "NF3",
                "equipe1": "CANET RBC",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "15/09/2024",
        "matchs": [
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - CTC LITTORAL VAR BASKET  - LA SEYNE BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": 74,
                "score2": 69
            }
        ]
    },
    {
        "date": "03/11/2024",
        "matchs": [
            {
                "categorie": "NFU15 ELITE",
                "equipe1": "IE - ST GELY BASKETBALL",
                "equipe2": "IE - CTC LITTORAL VAR BASKET  - LA SEYNE BASKET - 1",
                "horaire": "1315",
                "score1": 80,
                "score2": 68
            }
        ]
    },
    {
        "date": "26/01/2025",
        "matchs": [
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "FC LYON ASVEL FEMININ - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "IE - CTC CEVENNES BASKET-BALL",
                "horaire": "1500",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "11/05/2025",
        "matchs": [
            {
                "categorie": "NFU15 ELITE A",
                "equipe1": "OLYMPIQUE CARROS BASKET BALL - 1",
                "equipe2": "IE - ST GELY BASKETBALL",
                "horaire": "1315",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU21",
                "equipe1": "LA CROIX D'ARGENT B MONTPELLIER",
                "equipe2": "ST GELY BASKETBALL",
                "horaire": "1100",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RF2",
                "equipe1": "IE - ST GELY BASKETBALL - 2",
                "equipe2": "SO MILLAU",
                "horaire": "1530",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "21/09/2024",
        "matchs": [
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "UZES BASKET CLUB - 1",
                "horaire": "2000",
                "score1": 0,
                "score2": 0
            },
            {
                "categorie": "RM2",
                "equipe1": "PEROLS BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 2",
                "horaire": "2000",
                "score1": 79,
                "score2": 70
            }
        ]
    },
    {
        "date": "15/02/2025",
        "matchs": [
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC VERGEZE MILHAUT BASKET-BALL - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RFU18",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC ELAN COLOMIERS TOURNEFEUILLE BASKET - U.S. COLOMIERS BASKET - 2",
                "horaire": "1430",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "22/03/2025",
        "matchs": [
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "26/04/2025",
        "matchs": [
            {
                "categorie": "PNM",
                "equipe1": "IE - ST GELY BASKETBALL - 1",
                "equipe2": "FRONTIGNAN LA PEYRADE BASKET - 1",
                "horaire": "2000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "18/05/2025",
        "matchs": [
            {
                "categorie": "PRM",
                "equipe1": "ST GELY BASKETBALL - 3",
                "equipe2": "MONTPELLIER BASKET MOSSON - 2",
                "horaire": "1000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "25/05/2025",
        "matchs": [
            {
                "categorie": "PRM",
                "equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET - BASKET CLUB FABREGUES - 2",
                "equipe2": "ST GELY BASKETBALL - 3",
                "horaire": "1000",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "10/05/2025",
        "matchs": [
            {
                "categorie": "RFU15-2",
                "equipe1": "BC NARBONNE MEDITERRANEE",
                "equipe2": "ST GELY BASKETBALL - 2",
                "horaire": "1630",
                "score1": null,
                "score2": null
            },
            {
                "categorie": "RMU13",
                "equipe1": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - ST GELY BASKETBALL - 1",
                "equipe2": "IE - CTC MONTPELLIER SAINT GELY BASKET (MSGB) - MONTPELLIER BASKET MOSSON - 1",
                "horaire": "1300",
                "score1": null,
                "score2": null
            }
        ]
    },
    {
        "date": "19/10/2024",
        "matchs": [
            {
                "categorie": "RFU18",
                "equipe1": "IE - CTC HORIZON TOULOUSE NORD EST BASKET - 1",
                "equipe2": "IE - ST GELY BASKETBALL - 1",
                "horaire": "1630",
                "score1": 49,
                "score2": 63
            }
        ]
    },
    {
        "date": "16/02/2025",
        "matchs": [
            {
                "categorie": "RMU21",
                "equipe1": "ST GELY BASKETBALL",
                "equipe2": "UZES BASKET CLUB",
                "horaire": "1500",
                "score1": null,
                "score2": null
            }
        ]
    }
];