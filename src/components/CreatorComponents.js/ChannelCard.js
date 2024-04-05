import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ThemeContext from '../../contexts/ThemeProvider';

export default function ChannelCard({ channel }) {
    const {theme}=useContext(ThemeContext);
    return (
        <View key={channel.id} style={styles.channelCard}>
            <Text style={[styles.channelName, { color: theme === 'dark' ? '#fff' : '#000' }]}>
                {channel.name}
            </Text>
            <Text style={styles.channelDescription}>{channel.description}</Text>
            <Text style={styles.channelDescription}>Cinema</Text>
            <TouchableOpacity
                style={[styles.joinButton, { backgroundColor: theme === 'dark' ? '#555' : '#007bff' }]}
                onPress={() => handleJoinChannel(channel.id)}
            >
                <Text style={styles.buttonText}>Upload Content</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
    },
    categoryName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    channelCard: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        minWidth: 150,
    },
    channelName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    channelDescription: {
        fontSize: 14,
    },
    joinButton: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});