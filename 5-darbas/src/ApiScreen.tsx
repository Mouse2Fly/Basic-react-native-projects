import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

const ApiScreen = () => {
    const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
    
            fetch("https://jsonplaceholder.typicode.com/users")
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
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.container2}>
                        <View style={styles.seperator}/>
                        <Text style={styles.item}>Vardas: {item.name}</Text>
                        <Text style={styles.item}>Pavadinimas: {item.username}</Text>
                        <Text style={styles.item}>Pastas: {item.email}</Text>
                        <View style={styles.seperator}/>
                    </View>
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
        container2: {
            flex: 1,
            padding: 10,

        },
        item: {
            padding: 20,
            marginVertical: 3,
            marginHorizontal: 16,
            backgroundColor: "#109972",
            borderRadius: 5,
        },
        seperator: {
            height: 2,
            backgroundColor: "#000",
            marginVertical: 1,
          },
    });

export default ApiScreen;