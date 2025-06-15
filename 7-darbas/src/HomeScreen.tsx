import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sveiki!</Text>
            <Button title="Data" onPress={() => navigation.navigate('Data')} />
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