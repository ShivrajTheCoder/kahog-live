import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import ThemeContext from '../contexts/ThemeProvider';

export default function BottomNav() {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
  return (
    <View>
        <Text>Hi</Text>
    </View>
  )
}
