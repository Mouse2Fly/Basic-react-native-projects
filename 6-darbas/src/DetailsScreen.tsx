import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './Navigation';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = ({navigation}) => {
    
    const route = useRoute<DetailsRouteProp>();
    const { title, body } = route.params;

        return (
            <View style={styles.container}> 
                <Button title="Back" onPress={() => navigation.navigate("Data")} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.body}>{body}</Text>
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
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 10,
        },

        body: {
            fontSize: 16,
            lineHeight: 22,
        }
    });

export default DetailsScreen;