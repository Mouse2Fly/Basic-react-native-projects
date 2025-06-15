import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import navigation from './Navigation';      


export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sveiki!</Text>
            <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
});