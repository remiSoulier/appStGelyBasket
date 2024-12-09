import {SafeAreaView, ScrollView} from "react-native";
import {ListeCateTeam} from "./ListeCateTeam";

type props = {
    style?: object,
    afficherTeam?: (index:number)=>void

}

export function ListeTeams({style,afficherTeam}:props){
    return(
        <SafeAreaView style={style}>
            <ScrollView>
                <ListeCateTeam nom={"cate 1"} listeTeams={new Array<[string,boolean]>(["team 1",false],["team 2",true],["team 3",false])} afficherTeam={afficherTeam}/>
                <ListeCateTeam nom={"cate 2"} listeTeams={new Array<[string,boolean]>(["team 4",false],["team 5",false],["team 6",true])} afficherTeam={afficherTeam}/>
                <ListeCateTeam nom={"cate 3"} listeTeams={new Array<[string,boolean]>(["team 8",true],["team 13",false])} afficherTeam={afficherTeam}/>
            </ScrollView>
        </SafeAreaView>
    )
}

