import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './Navigation';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
    
    const navigation = useNavigation();
    const route = useRoute<DetailsRouteProp>();
    const { title, body, userId } = route.params;

        return (
            <View style={styles.container}> 
                <Text style={styles.title}><Icon name="user-circle" size={30} color="#000000" /> {title}</Text>
                <Text style={styles.body}><Icon name="feed" size={30} color="#000000" /> {body}</Text>
                <Text style={styles.user}><Icon name="key" size={30} color="#000000" /> Vartotojo ID: {userId}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backBtn}><Icon name="hand-o-left" size={30} color="#000000" /> Grizti</Text>
                </TouchableOpacity>
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
        },

        user: {
            fontSize: 14,
            color: 'gray',
            marginTop: 10,
        },

        backBtn: {
            marginTop: 20,
            backgroundColor: 'blue',
            fontSize: 16,
        },
    });

export default DetailsScreen;