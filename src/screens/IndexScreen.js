import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
} from "react-native";
import { Feather ,MaterialCommunityIcons} from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {
    const { state, addMemo,delMemo } = useContext(Context);
    const [afSort, setAfSort] = useState([])
    console.log(state)
    
        for(let i = afSort.length - 1; i >= 0; i--){
            afSort.pop()
        }
        for(let i = 0; i < 7; i++){
            if(i == 0){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Sun"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 1){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Mon"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 2){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Tue"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 3){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Wed"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 4){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Thu"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 5){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Fri"){
                        afSort.push(state[cDay])
                    }
                }
            }
            if(i == 6){
                for(let cDay = 0; cDay < state.length; cDay++)
                {
                    if(state[cDay].day == "Sat"){
                        afSort.push(state[cDay])
                    }
                }
            }
        }
    const setDayColoer = (day) => {
        switch (day) {
            case day = "Mon": 
                return "#FFE301";
            case day = "Tue": 
                return "#FF7797";
            case day = "Wed": 
                return "#83FF71";
            case day = "Thu": 
                return "#ffa500";
            case day = "Fri": 
                return "#00bfff";
            case day = "Sat": 
                return "#CD43FA";
            case day = "Sun": 
                return "#FF4C34";
            default:
                return "#008000";
        }
    }
    const confirmDelete = (id) => {
        return Alert.alert(
            "Delete?",
            "Confirm Delete?",
            [
                {
                    text:'Cancel',
                    onPress:()=>console.log('Cancel to delte'),
                    style:'cancel'
                },
                {
                    text:'confirm',
                    onPress:()=>delMemo(id)
                }
            ],
            {cancelable:false}
        )
    } 
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Profile")}
                        
            >
                        <Text
                            style={styles.titleXl}
                        >
                            {
                                <MaterialCommunityIcons name="face-man" size={40} color="black" />        
                            }
                            Profile
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("Create")}
                        
            >
                        <Text
                            style={styles.titleXl}
                        >
                            {
                                <Ionicons name="create-outline" size={40} color="black" />        
                            }
                            Create
                        </Text>
            </TouchableOpacity>
            <FlatList
                data={afSort}
                keyExtractor={(memo) => memo.id+memo.day}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate("Show", { id: item.id })}
                        >
                            <View style={styles.row}>

                                <View 
                                style={[
                                    styles.dayL,
                                    {backgroundColor: setDayColoer(item.day) }
                                ]}
                                
                                >
                                    <Text 
                                    style={styles.title}
                                    >
                                        {item.day} 
                                    </Text>
                                    <Text 
                                    style={styles.title}
                                    >
                                        {item.timeS} - {item.timeE}
                                    </Text>
                                </View >

                                <View
                                    style={styles.mainCard}
                                >
                                     <View style={styles.dayContext}>
                                    <Text
                                        >
                                            {item.subjectCode}           
                                        </Text>
                                        <Text
                                        >
                                            หมู่ {item.subjectM}
                                        </Text>
                                        
                                        <Text
                                        >
                                            room {item.room}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>confirmDelete(item.id)}
                                        style={styles.Titem}
                                    >
                                        <Feather name="trash-2" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#148BFB",
    },
    row: {
        flexDirection: "row",
        paddingVertical: 0,
        paddingHorizontal:0,
    },
    title: {
        fontSize: 18,
        margin : 1,
        fontWeight:"bold",
    },
    item: {
		backgroundColor: "#ffff",
		marginVertical: 10,
		marginHorizontal: 10,
        borderRadius:10,
	},
    titleXl:{
        fontSize: 25,
        margin : 5,
    },
    dayL:{
        width:"32%",
        paddingLeft:5,
        paddingTop:5,
        borderTopLeftRadius:10,
        borderEndStartRadius:10,
    },
    dayContext:{
        padding:5,
        width:"60%",
    },
    Titem:{ 
        justifyContent:"center",
    },
    mainCard:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default IndexScreen;