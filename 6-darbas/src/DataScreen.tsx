import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import Navigation, { RootStackParamList } from './Navigation';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type DataScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Data'>;

export default function DataScreen() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const Navigation = useNavigation<DataScreenNavigationProp>();

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            }
            );
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.container}> 
            <FlatList
            data={data.slice(0, 10)} // Display only the first 10 items
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => Navigation.navigate("Details", { title: item.title, body: item.body })}>
                    <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#f9c2ff",
        borderRadius: 5,
    }
});