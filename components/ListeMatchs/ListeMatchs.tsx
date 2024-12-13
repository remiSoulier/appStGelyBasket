import {FicheMatchListe} from "../DetailTeam/FicheMatchListe";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import React, {useRef, useEffect} from "react";
import {DateTab} from "./DateTab";

type Match = {
    categorie: string;j
    equipe1: string;
    equipe2: string;
    score1: number;
    score2: number;
    horaire: string;
}

type Matchs = {
    date: string;
    matchs: Match[];
}

type props = {
    matchs: Matchs[];
}

export function ListeMatchs  ({ matchs }: props)  {
    const scrollViewRef = useRef<ScrollView>(null);

    const getNextDate = () => {
        const today = new Date();
        const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split('/').map(Number);
            return new Date(year, month - 1, day);
        };

        const nextMatch = matchs.find(match => parseDate(match.date) > today);
        return nextMatch ? nextMatch.date : matchs[0].date;
    };

    const [selectedTab, setSelectedTab] = React.useState(getNextDate());



    return (
        <SafeAreaView>
            <ScrollView ref={scrollViewRef} showsHorizontalScrollIndicator={false} horizontal={true}>
                {matchs.map((match, index) => {
                    const isSelected = selectedTab === match.date;
                    return (
                        <DateTab key={index} date={match.date} onPress={() => setSelectedTab(match.date)} style={ isSelected ? styles.selectTab : styles.tab }/>
                    )
                })}
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false} >
                {matchs.find(match => match.date === selectedTab)?.matchs.map((match, index) => (

                    <FicheMatchListe key={index} equipe1={match.equipe1.match("ST GELY BASKETBALL")? match.categorie:match.equipe1} equipe2={match.equipe2.match("ST GELY BASKETBALL")? match.categorie:match.equipe2} score1={match.score1} score2={match.score2} date={selectedTab} heure={match.horaire}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },
    selectTab: {
        backgroundColor: '#109664',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
    }
});