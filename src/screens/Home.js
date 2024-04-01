import React from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Entypo";

export default function Home() {
    return (
        <View>
            <Icon name="arrow-long-left" size={30} color="#900" />
            <Text>Home</Text>
        </View>
    )
}
