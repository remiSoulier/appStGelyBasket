import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

type Team = {
    libelle: string;
    position: number;
    gagnes: number;
    perdus: number;
};

type props = {
    data: Team[];

}


export function ExtraitClassement({data}: props) {
    let idStGely = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].libelle === "ST GELY BASKETBALL") {
            idStGely = i;
        }
    }
    let team1 = data[idStGely - 1];
    let stGely = data[idStGely];
    let team2 = data[idStGely + 1];


    return(
        <SafeAreaView style={styles.view}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={styles.tableRow}>
                    <View style={styles.team}>
                        <Text style={styles.cellText}>{team1.position} -</Text>
                        <Text style={styles.cellText}> {team1.libelle.substring(0,35)}</Text>
                    </View>
                    <View style={styles.record}>
                        <Text style={styles.cellText}>{team1.gagnes} -</Text>
                        <Text style={styles.cellText}> {team1.perdus}</Text>
                    </View>
                </View>
                <View  style={[styles.tableRow,{backgroundColor: "#109664"}]}>
                    <View style={styles.team}>
                        <Text style={styles.cellText}>{stGely.position} -</Text>
                        <Text style={styles.cellText}> {stGely.libelle.substring(0,35)}</Text>
                    </View>
                    <View style={styles.record}>
                        <Text style={styles.cellText}>{stGely.gagnes} -</Text>
                        <Text style={styles.cellText}> {stGely.perdus}</Text>
                    </View>
                </View>
                <View  style={styles.tableRow}>
                    <View style={styles.team}>
                        <Text style={styles.cellText}>{team2.position} -</Text>
                        <Text style={styles.cellText}> {team2.libelle.substring(0,35)}</Text>
                    </View>
                    <View style={styles.record}>
                        <Text style={styles.cellText}>{team2.gagnes} -</Text>
                        <Text style={styles.cellText}> {team2.perdus}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'lightgrey',
        width: '100%',
        height: 120
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cellText: {
        textAlign: 'center',
    },
    team: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    record: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});