import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChannelContentCont() {
  const [selectedSection, setSelectedSection] = useState('audio');

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color:"black" }} >My Content</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleSelectSection('audio')}
          style={[
            styles.sectionButton,
            selectedSection === 'audio' && styles.selectedButton,
          ]}>
          <Text style={selectedSection === 'audio' && styles.selectedText}>
            Audio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSelectSection('video')}
          style={[
            styles.sectionButton,
            selectedSection === 'video' && styles.selectedButton,
          ]}>
          <Text style={selectedSection === 'video' && styles.selectedText}>
            Video
          </Text>
        </TouchableOpacity>
      </View>

      {selectedSection === 'audio' && (
        <View>
          {/* Your Audio Content Here */}
          <Text>This is the audio section</Text>
        </View>
      )}

      {selectedSection === 'video' && (
        <View>
          {/* Your Video Content Here */}
          <Text>This is the video section</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
  selectedText: {
    fontWeight: 'bold',
  },
});
