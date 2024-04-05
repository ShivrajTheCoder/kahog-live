import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests
import KeyCenter from '../../KeyCenter';
import ChannelCard from './ChannelCard';

export default function CreatorChannelContainer() {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const apiUrl = KeyCenter.apiUrl;

  useEffect(() => {
    setError(null);
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`${apiUrl}/channels/getcreatorchannels/1`);
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setChannels(response.data.channels);
        } else {
          setError('Failed to fetch channels: ' + response.statusText); // Set error message
        }
      } catch (error) {
        console.error('Error fetching channels:', error);
        setError('Error fetching channels: ' + error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  return (
    <View >
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>My Channels</Text>
      <ScrollView contentContainerStyle={{ marginVertical:10 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? ( // Render error message if error state is not null
          <Text>No channels found</Text>
        ) : (
          channels.map(channel => (
            <ChannelCard key={channel.id} channel={channel}/>
          ))
        )}
      </ScrollView>
    </View>
  );
}
