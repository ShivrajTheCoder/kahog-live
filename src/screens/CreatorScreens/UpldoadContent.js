import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import BackButton from '../../components/BackButton';
import ChannelContentCont from '../../components/CreatorComponents.js/ChannelContentCont';

export default function UpldoadContent({ channelId }) {
  console.log(channelId);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio, DocumentPicker.types.video],
      });

      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.log('Error picking file:', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <BackButton screen='Upload' to='Creator' />
      <Text style={styles.title}>Upload Content</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePick}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
      {selectedFile && (
        <Text style={styles.selectedFile}>Selected File: {selectedFile.name}</Text>
      )}
      <ChannelContentCont />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingVertical:10
  },
  title: {
    fontSize: 15,
    marginBottom: 20,
    color:"black",
    fontWeight:"bold"
  },
  uploadButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    justifyContent:"center",
    alignItems: "center",
    width:"fit-content",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  selectedFile: {
    marginTop: 20,
    fontSize: 16,
  },
});
