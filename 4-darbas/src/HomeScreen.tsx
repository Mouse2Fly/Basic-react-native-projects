import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from "react";


export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                <Button title="Profilis" onPress={() => navigation.navigate("Profile")} />
            </View>
            <Button title="Irasymas" onPress={() => navigation.navigate("Input")} />
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
    btn: {
        margin: 10,
        borderRadius: 5,
    }
});