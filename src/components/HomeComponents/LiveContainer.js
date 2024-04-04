import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import ThemeContext from '../../contexts/ThemeProvider';
import LiveCardBottomSheet from '../BottomSheets/LiveCardBottomSheet';
const dummyData = [
  {
    id: 1,
    name: 'Shivraj',
    courseName: 'Course Name 1',
    imageUrl: 'https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg',
    heading: 'Heading of Video 1',
  },
  {
    id: 2,
    name: 'Another Mentor',
    courseName: 'Course Name 2',
    imageUrl: 'https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg',
    heading: 'Heading of Video 2',
  },
  // Add more data items as needed
];

export default function LiveContainer({ fooLive = true }) {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            {fooLive && <Text style={[styles.text, { color: theme === 'dark' ? 'white' : 'black' }]}>Live Now</Text>}
            {!fooLive && <Text style={[styles.text, { color: theme === 'dark' ? 'white' : 'black' }]}>Mentor Courses</Text>}
            <ScrollView horizontal={true} style={styles.tileScroll} showsHorizontalScrollIndicator={false}>
                {dummyData.map((item) => (
                    <LiveCardBottomSheet 
                        key={item.id}
                        name={item.name}
                        courseName={item.courseName}
                        imageUrl={item.imageUrl}
                        heading={item.heading}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundcolor: "black",
        padding: 10,
    },
    text: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
    tileScroll: {
        marginTop: 10,
        marginBottom: 10,
    },
});
