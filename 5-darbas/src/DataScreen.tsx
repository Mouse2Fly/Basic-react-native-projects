import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { FlatList } from "react-native-gesture-handler";


export default function DataScreen() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
            data={data.slice(0, 20)} // Display only the first 10 items
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Text style={styles.item}>{item.title}</Text>
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