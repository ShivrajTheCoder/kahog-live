import React, { useContext } from 'react';
import { Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign"
import ThemeContext from '../../contexts/ThemeProvider';


const share = <Icons name="sharealt" size={24} color="white" />;

export default function LiveContainer({ fooLive = true }) {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            {fooLive && <Text style={[styles.text, { color: theme === 'dark' ? 'white' : 'black' }]}>Live Now</Text>}
            {!fooLive && <Text style={[styles.text, { color: theme === 'dark' ? 'white' : 'black' }]}>Mentor Courses</Text>}
            <ScrollView horizontal={true} style={styles.tileScroll} showsHorizontalScrollIndicator={false}>
                <View style={styles.tileCont}>
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, styles.bold]}>Satish Thakral</Text>
                            <Text style={styles.name}>Course Name</Text>
                        </View>
                        <TouchableOpacity style={styles.shareIcon}>
                            {share}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.heading}>Heading of the video</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Listen Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tileCont}>
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: `https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg` }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, styles.bold]}>Satish Thakral</Text>
                            <Text style={styles.name}>Course Name</Text>
                        </View>
                        <TouchableOpacity style={styles.shareIcon}>
                            {share}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.heading}>Heading of the video</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Listen Now</Text>
                    </TouchableOpacity>
                </View>
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
    tileCont: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 10,
        backgroundColor: '#0077b6',
        borderRadius: 10,
        width: 250, // Adjust the width as needed
    },
    image: {
        height: 70,
        width: 70,
        borderTopLeftRadius: 10,
    },
    liveInfo: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 10,
        justifyContent: 'space-between',
    },
    details: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    name: {
        color: "white",
        fontSize: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FF8C00',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    heading: {
        color: "white",
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 2,
        marginHorizontal: 4,
    },
    shareIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
});
