import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import Navigation from './Navigation';
import { useNavigation } from "@react-navigation/native";

export default function InputScreen() {

    const [saved, setSaved] = useState(false);

    const [name, setName] = useState("");
    const [sirname, setSirname] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const saveData = async () => {
        try {
            await AsyncStorage.setItem("user_name", name);
            await AsyncStorage.setItem("user_sirname", sirname);
            await AsyncStorage.setItem("user_date", birthdate);
            setSaved(true);

        } catch (error) {
            console.error("AsyncStorage error:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ivesk savo duomenys:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Jusu vardas"/>
                        <TextInput
                style={styles.input}
                value={sirname}
                onChangeText={setSirname}
                placeholder="Jusu Pavarde"/>
                        <TextInput
                style={styles.input}
                value={birthdate}
                onChangeText={setBirthdate}
                placeholder="Jusu gimimo data"/>
            <Button title="Issaugoti" onPress={saveData} />
            {saved ? <Text style={styles.result}>Issaugota</Text> : null}
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
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "80%",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 16,
        color: "blue",
    },
});
