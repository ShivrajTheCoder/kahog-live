import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Entypo";

export default function BackButton({ screen = "Home", to = "Home" }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Icon name="arrow-long-left" size={30} color="black" style={styles.icon} />
      <Text style={styles.screenName}>{screen}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 10, // Adjust the spacing between icon and text
  },
  screenName: {
    flex: 1, // To make sure the text takes up remaining space
    textAlign: 'center', // To center the text horizontally
    fontSize: 20, // Adjust the font size as needed
  },
});
