import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, Text } from 'react-native';


export default function ModalScreen() {

    const [visible, setVisible] = useState(false);
    const [selectedText, setSelectedText] = useState('Tai yra modalinis langas!');

    const handleTextSelection = () => {
        // Simuliuojame pasirinkto teksto gavimą
        let textTable = [
            'Pirmas pasirinktas tekstas',
            'Antas pasirinktas tekstas',
            'Trecias pasirinktas tekstas',
            'Ketvirtas pasirinktas tekstas',
            'Penktas pasirinktas tekstas',
        ]
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let row = Math.floor(Math.random() * (max - min + 1)) + min;

        setSelectedText(textTable[row]);
        setVisible(true);
    }

    return (
        <View style={styles.container}>
            <Button title="Rodyti modal" onPress={handleTextSelection} />

            <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={() => setVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{selectedText}</Text>
                        <Button title="Uždaryti" onPress={() => setVisible(false)} />
                    </View>
                </View>

                <View style={{marginTop: 5}} >
                    <Button title="Rodyti alert langa" onPress={() => alert("Tai yra paprastas alert langas")} />
                </View>

            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    }
});