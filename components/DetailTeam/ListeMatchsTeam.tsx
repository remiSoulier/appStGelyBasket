import {SafeAreaView, ScrollView} from "react-native";
import {FicheMatchListe} from "./FicheMatchListe";
import {None} from "../None";

type Matchs = {
    equipe1: string;
    equipe2: string;
    score1?: number;
    score2?: number;
    date: string;
    horaire: string;
}

type props = {
    style?: object;
    data: Matchs[];
    index: number;

}

export function ListeMatchsTeam({index,data}: props) {
    return(
    <SafeAreaView style={{flex:8/9}}>
            <ScrollView>
                {data.map((match, index) => (
                    match.equipe1 === null || match.equipe2 === null ?
                    <None/>
                    :
                    <FicheMatchListe
                        equipe1={match.equipe1}
                        equipe2={match.equipe2}
                        date={match.date}
                        heure={match.horaire}
                        score1={match.score1}
                        score2={match.score2}
                        key={index}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )}

