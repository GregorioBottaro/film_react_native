import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#E76933',
        justifyContent: 'center',
        paddingTop: 30,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 0,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderRadius: 12,
    }
})
