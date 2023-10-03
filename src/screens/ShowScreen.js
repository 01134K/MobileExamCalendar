import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context);

    const memo = state.find((memo) => memo.id === route.params.id);
    console.log(memo);
    return (
        <View style={styles.container}>
            {/* <Text>[{route.params.id}]</Text> */}
            <View style={styles.card}>
                <Text style={styles.title}>{memo.day}</Text>
                <View style={styles.textHo}>
                    <Text style={styles.title}>Your money</Text>
                    <Text style={styles.content}>{memo.money}</Text>
                </View>
                <View style={styles.textHo}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.content}>{memo.title}</Text>
                </View>
                <View style={styles.textHo}>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.content}>{memo.description}</Text>
                </View> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#0074CC",
    },
    title: {
        fontSize: 25,
        fontWeight:"bold",
        marginBottom: 5,
    },
    content: {
        fontSize: 20,
    },
    card :{
        backgroundColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        height:"95%",
    },
    textHo:{
        marginVertical:10,
        borderTopWidth: 1,
    }
});

export default ShowScreen;