import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound'; // Import Sound library for audio handling

export default function AudioPlayingScreen() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    loadAudio();
    return () => {
      if (audioRef.current !== null) {
        audioRef.current.release(); // Release the audio resource
      }
    };
  }, []);

  const loadAudio = async () => {
    try {
      const sound = new Sound('https://res.cloudinary.com/dzd53baqf/video/upload/v1711691938/samples/O_Mahi_O_Mahi_PagalWorld.com.cm_ejbhwl.mp3', null, (error) => {
        if (error) {
          console.log('Error loading audio:', error);
          return;
        }
        setDuration(sound.getDuration() * 1000); // Duration in milliseconds
      });
      audioRef.current = sound;
    } catch (error) {
      console.log('Error loading audio:', error);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current !== null) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSeekForward = () => {
    if (audioRef.current !== null) {
      const newPosition = position + 5000; // Seek forward by 5 seconds
      audioRef.current.setCurrentTime(newPosition / 1000); // Position in seconds
      setPosition(newPosition);
    }
  };

  const handleSeekBackward = () => {
    if (audioRef.current !== null) {
      const newPosition = position - 5000; // Seek backward by 5 seconds
      audioRef.current.setCurrentTime(newPosition / 1000); // Position in seconds
      setPosition(newPosition);
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={handleSeekBackward}>
          <Text style={styles.controlButton}>{'<<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Text style={styles.controlButton}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSeekForward}>
          <Text style={styles.controlButton}>{'>>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.durationText}>{formatTime(position)} / {formatTime(duration)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  durationText: {
    fontSize: 18,
  },
});
