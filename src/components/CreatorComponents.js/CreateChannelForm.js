import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests
import KeyCenter from '../../KeyCenter';

export default function CreateChannelForm() {
    const [channelName, setChannelName] = useState('');
    const [description, setDescription] = useState('');
    const [interests, setInterests] = useState([]);
    const [selectedInterest, setSelectedInterest] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const apiUrl = KeyCenter.apiUrl;

    // Function to fetch interests from API
    useEffect(() => {
        const fetchInterests = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${apiUrl}/interests/getallinterests`);
                if (response.status === 200) {
                    setInterests(response.data.interests);
                }

            } catch (error) {
                setError('Error fetching interests');
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchInterests();
    }, []);

    // Function to handle interest selection
    const handleInterestSelect = (interestId) => {
        setSelectedInterest(interestId);
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        // Submit logic here
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Channel Name"
                value={channelName}
                onChangeText={text => setChannelName(text)}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <FlatList
                data={interests}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.button, selectedInterest === item.id ? styles.selectedButton : null]}
                        onPress={() => handleInterestSelect(item.id)}
                    >
                        <Text style={selectedInterest === item.id ? styles.selectedButtonText : null}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
                <Text style={styles.createButtonText}>Create Channel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top', // Set text alignment to top
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor: 'gray',
    },
    selectedButtonText: {
        color: 'white',
    },
    createButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    createButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});
