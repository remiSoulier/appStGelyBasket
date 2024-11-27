import {SafeAreaView, ScrollView} from "react-native";
import {ListeCateTeam} from "./ListeCateTeam";

type props = {
    style?: object,

}

export function ListeTeams({style}:props){
    return(
        <SafeAreaView style={style}>
            <ScrollView>
                <ListeCateTeam nom={"cate 1"} listeTeams={new Array<[string,boolean]>(["team 1",false],["team 2",true],["team 3",false])}/>
                <ListeCateTeam nom={"cate 2"} listeTeams={new Array<[string,boolean]>(["team 4",false],["team 5",false],["team 6",true])}/>
                <ListeCateTeam nom={"cate 3"} listeTeams={new Array<[string,boolean]>(["team 8",true],["team 13",false])}/>
            </ScrollView>
        </SafeAreaView>
    )
}

