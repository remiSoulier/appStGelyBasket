import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FicheTeam} from "../ListeTeam/FicheTeam";
import {ApercuTeam} from "./ApercuTeam";
import {useState} from "react";
import {None} from "../None";
import {ListeMatchsTeam} from "./ListeMatchsTeam";
import {Classement} from "./Classement";

type props = {
    style?: object;

    index: number;

}

const classemnt = [
    {
        "libelle": "FO PISCENOIS",
        "position": 1,
        "gagnes": 7,
        "perdus": 1
    },
    {
        "libelle": "MONTPELLIER BASKET MOSSON",
        "position": 2,
        "gagnes": 7,
        "perdus": 0
    },
    {
        "libelle": "UZES BASKET CLUB",
        "position": 3,
        "gagnes": 6,
        "perdus": 2
    },
    {
        "libelle": "CTC OUEST MONTPELLIER METROPOLE BASKET",
        "position": 4,
        "gagnes": 5,
        "perdus": 2
    },
    {
        "libelle": "LA CROIX D'ARGENT B MONTPELLIER",
        "position": 5,
        "gagnes": 4,
        "perdus": 3
    },
    {
        "libelle": "BASKET PAYS DE LUNEL",
        "position": 6,
        "gagnes": 3,
        "perdus": 4
    },
    {
        "libelle": "BC RIVESALTES",
        "position": 7,
        "gagnes": 3,
        "perdus": 4
    },
    {
        "libelle": "CTC CEVENNES BASKET-BALL",
        "position": 8,
        "gagnes": 2,
        "perdus": 6
    },
    {
        "libelle": "CASTELNAU BASKET",
        "position": 9,
        "gagnes": 2,
        "perdus": 4
    },
    {
        "libelle": "ST GELY BASKETBALL",
        "position": 10,
        "gagnes": 1,
        "perdus": 6
    },
    {
        "libelle": "VERGEZE BASKET CLUB",
        "position": 11,
        "gagnes": 0,
        "perdus": 7
    },


];

const matchs = [
    {"equipe1": "IE - CTC CEVENNES BASKET-BALL",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2024-10-06",
        "horaire": "1100",
        "score1": 75,
        "score2": 56},
    {"equipe1": "FO PISCENOIS",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2024-10-13",
        "horaire": "1300",
        "score1": 91,
        "score2": 48},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "",
        "date": "2024-10-20",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "UZES BASKET CLUB",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2024-11-10",
        "horaire": "1500",
        "score1": 127,
        "score2": 53},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "MONTPELLIER BASKET MOSSON",
        "date": "2024-11-17",
        "horaire": "1730",
        "score1": 54,
        "score2": 126},
    {"equipe1": "CASTELNAU BASKET",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2024-11-24",
        "horaire": "1500",
        "score1": 83,
        "score2": 54},
    {"equipe1": "IE - VERGEZE BASKET CLUB",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2024-12-01",
        "horaire": "1300",
        "score1": 45,
        "score2": 107},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "BC RIVESALTES",
        "date": "2024-12-08",
        "horaire": "1500",
        "score1": 68,
        "score2": 97},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET",
        "date": "2024-12-15",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "BASKET PAYS DE LUNEL",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-01-12",
        "horaire": "1300",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "LA CROIX D'ARGENT B MONTPELLIER",
        "date": "2025-01-19",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "IE - CTC CEVENNES BASKET-BALL",
        "date": "2025-01-26",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "FO PISCENOIS",
        "date": "2025-02-02",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-02-09",
        "horaire": "1100",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "UZES BASKET CLUB",
        "date": "2025-02-16",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "MONTPELLIER BASKET MOSSON",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-03-09",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "CASTELNAU BASKET",
        "date": "2025-03-16",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "IE - VERGEZE BASKET CLUB",
        "date": "2025-03-23",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "BC RIVESALTES",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-03-30",
        "horaire": "1300",
        "score1": null,
        "score2": null},
    {"equipe1": "IE - CTC OUEST MONTPELLIER METROPOLE BASKET",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-04-06",
        "horaire": "1100",
        "score1": null,
        "score2": null},
    {"equipe1": "ST GELY BASKETBALL",
        "equipe2": "BASKET PAYS DE LUNEL",
        "date": "2025-05-04",
        "horaire": "1500",
        "score1": null,
        "score2": null},
    {"equipe1": "LA CROIX D'ARGENT B MONTPELLIER",
        "equipe2": "ST GELY BASKETBALL",
        "date": "2025-05-11",
        "horaire": "1100",
        "score1": null,
        "score2": null}
];

export function DetailTeam({index}: props) {

    const [selectedTab, setSelectedTab] = useState('Apercu');

    const ApercuClick = () => {
        setSelectedTab('Apercu');
    }

    const MatchsClick = () => {
        setSelectedTab('Matchs');
    }

    const ClassementClick = () => {
        setSelectedTab('Classement');
    }

    const TabButton = ({ isSelected, onPress, label }) => (
        <TouchableOpacity style={isSelected ? styles.selectedTab : styles.tab} onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );


    return(
        <SafeAreaView style={styles.scrollViewTeam}>
                <Text style={styles.title}>Equipe {index}</Text>
            <View style={styles.tabs}>
                {['Apercu', 'Matchs', 'Classement'].map(tab => (
                    <TabButton
                        key={tab}
                        isSelected={selectedTab === tab}
                        onPress={() => setSelectedTab(tab)}
                        label={tab}
                    />
                ))}

            </View>

            <SafeAreaView>
                {selectedTab === 'Apercu' ?
                    <ApercuTeam index={index} classemnt={classemnt}/>
                    :
                    <None/>
                }
                {selectedTab === 'Matchs' ?
                    <ListeMatchsTeam index={index} data={matchs}/>
                    :
                    <None/>
                }
                {selectedTab === 'Classement' ?
                    <Classement data={classemnt}/>
                    :
                    <None/>
                }

            </SafeAreaView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollViewTeam: {
        backgroundColor: '#e1e1e1',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        flex: 1,
    },

    title: {
        fontSize: 30,
        color: '#636363',
        margin: 20,
        alignItems: 'center',

    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        width: '100%',

    },

    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '33.3%',

    },
    selectedTab: {
        backgroundColor: '#109664',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        width: '33.3%',
    }
});