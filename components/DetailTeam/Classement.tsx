import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

type Team = {
    libelle: string;
    position: number;
    gagnes: number;
    perdus: number;
};

type Props = {
    data: Team[];
};

export function Classement({ data }: Props) {
    console.log(Dimensions.get('window').width);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {data.map((team, index) => (
                    <View key={index} style={team.libelle==="ST GELY BASKETBALL"? [styles.tableRow,{backgroundColor: "#109664"}]:styles.tableRow}>
                        <View style={styles.team}>
                            <Text style={styles.cellText}>{team.position} -</Text>
                            <Text style={styles.cellText}> {team.libelle.substring(0,35)}</Text>
                        </View>
                        <View style={styles.record}>
                            <Text style={styles.cellText}>{team.gagnes} -</Text>
                            <Text style={styles.cellText}> {team.perdus}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 8/9,
        padding: 10,
        width: Dimensions.get('window').width - 20,
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