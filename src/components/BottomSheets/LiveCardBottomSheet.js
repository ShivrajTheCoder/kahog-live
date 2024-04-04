import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import Icons from "react-native-vector-icons/AntDesign";

const LiveCardBottomSheet = ({ name, courseName, imageUrl, heading }) => {
    const refRBSheet = useRef(null);

    const openBottomSheet = () => {
        if (refRBSheet.current) {
            refRBSheet.current.open();
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openBottomSheet}>
                <View style={styles.tileCont}>
                    <View style={styles.liveInfo}>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <View style={styles.details}>
                            <Text style={[styles.name, styles.bold]}>{name}</Text>
                            <Text style={styles.name}>{courseName}</Text>
                        </View>
                        {/* <TouchableOpacity style={styles.shareIcon}>
                            <Icons name="sharealt" size={24} color="white" />
                        </TouchableOpacity> */}
                    </View>
                    <Text style={styles.heading}>{heading}</Text>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Listen Now</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                    body: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 20, // Add padding for content spacing
                    }
                }}
            >
                <View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.value}>{name}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Course Name:</Text>
                        <Text style={styles.value}>{courseName}</Text>
                    </View>
                    {/* Add more info containers for additional fields if needed */}
                    <Button title="Join Now" onPress={() => console.log("Join Now button pressed")} />
                </View>
            </RBSheet>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#000"
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

export default LiveCardBottomSheet;
