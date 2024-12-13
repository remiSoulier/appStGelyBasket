import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

type props = {
    index: number;
    style?: object;
}

export function Article({style,index}: props) {
    return(
        <SafeAreaView style={styles.view}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Article {index}</Text>
                <Text>Contenu de l'article</Text>
                <Text style={styles.article}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dictum diam, ac feugiat nunc posuere sed. Proin vehicula et ipsum et semper. Curabitur vel pellentesque mi. Mauris at metus sapien. Aenean a malesuada arcu, vel scelerisque nisl. Phasellus varius, lacus id sagittis aliquet, nisi nulla volutpat felis, sit amet vulputate nisl lorem et nisi. Nulla accumsan vitae ligula sit amet rutrum. Cras aliquam sodales nibh, sit amet rhoncus metus malesuada quis. Pellentesque posuere lectus ut magna mattis ultrices. Fusce tempor ex vitae nulla congue, at lacinia enim pretium. In auctor erat a lorem fringilla pulvinar vitae id lorem.

                    Phasellus ac sollicitudin elit. Vestibulum a odio nec justo dapibus imperdiet. Fusce nec dictum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl risus, ullamcorper et lectus eu, sodales scelerisque arcu. Curabitur varius nisl ac dictum accumsan. Praesent sit amet tortor dui. Pellentesque viverra nibh risus, vel posuere libero rutrum ac. Curabitur eleifend imperdiet luctus. Vestibulum orci est, viverra sed mauris efficitur, efficitur placerat felis.

                    Mauris condimentum leo eu urna consectetur, eget lobortis justo varius. Curabitur venenatis gravida scelerisque. Pellentesque ac magna maximus, viverra diam non, malesuada libero. Cras congue lorem eu neque sodales, id scelerisque purus fringilla. Cras pretium velit diam, eu sollicitudin libero cursus a. Nullam ullamcorper pretium erat sed euismod. Sed hendrerit dignissim mi, nec finibus mauris sodales eu. Nullam elementum iaculis tellus vel ultrices. Curabitur at dapibus elit. Fusce mattis, justo in ornare ultricies, ex ex molestie metus, at placerat metus augue sit amet risus. Quisque congue egestas augue, id bibendum erat fringilla sit amet.

                    Vivamus rutrum et nibh quis tempus. Sed lacinia gravida dapibus. Donec a tortor consequat, consequat nulla ultricies, scelerisque justo. Integer at urna porta, posuere velit in, dictum nulla. Morbi non auctor neque. Aenean tristique magna vitae libero volutpat, eu pretium erat semper. Nullam rhoncus nisi et iaculis venenatis. Proin nec ullamcorper magna. Aliquam at vehicula nulla, id egestas eros.

                    Donec vel euismod felis, fringilla tempor mi. Vivamus accumsan bibendum nisl, id tincidunt leo cursus ac. Praesent ultricies justo nec ultrices ultricies. Phasellus odio tellus, viverra quis condimentum et, maximus vel justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lacus dolor, pellentesque id sollicitudin eu, tempus vitae metus. Vestibulum maximus odio nec condimentum lacinia.r
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#109664',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    article: {
        backgroundColor: '#636363',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,

    },
    view: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        width: '90%',
        padding: 20,
        margin: 10,
    }


})