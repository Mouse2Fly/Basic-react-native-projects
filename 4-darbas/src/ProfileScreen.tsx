import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {

    const [savedName, setSavedName] = useState("");
    const [savedSirname, setSavedSirname] = useState("");
    const [savedBirthdate, setSavedBirthdate] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedName = await AsyncStorage.getItem("user_name");
                if (storedName) {
                    setSavedName(storedName);
                }
                const storedSir = await AsyncStorage.getItem("user_sirname");
                if (storedSir) {
                    setSavedSirname(storedSir);
                }
                const storedDate = await AsyncStorage.getItem("user_date");
                if (storedDate) {
                    setSavedBirthdate(storedDate);
                }
            } catch (error) {
                console.error("AsyncStorage error:", error);
            }
        };
        loadData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Vartotojo profilis</Text>
            <Text style={styles.result}>Vardas: {savedName}</Text>
            <Text style={styles.result}>Pavarde: {savedSirname}</Text>
            <Text style={styles.result}>Gimimo data: {savedBirthdate}</Text>
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