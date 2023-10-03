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


const IndexScreen = ({ navigation }) => {
    const { state, addMemo,delMemo } = useContext(Context);
    const [afSort, setAfSort] = useState([])
    console.log(state)
    // const DaySrot= (state) =>{
        // let afSort = [];
        // let countarr = 0;
        // setAfSort(afSort,[]);
        // for(let i =0; i<=afSort.length; i++){
        //     console.log("state "+i+" = "+afSort[i])
        // }
        // console.log("BFter re = "+afSort)
        // console.log("afSort len = " + afSort.length)
        for(let i = afSort.length - 1; i >= 0; i--){
            afSort.pop()
            // setAfSort[i].pop()
            // setAfSort(afSort.slice(afSort.indexOf(0, 1)))
        }
        console.log("AFter re = "+afSort)
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
   
    console.log("afSort add = "+afSort)
    // console.log("<------------------------------------------------------->")
    const setDayColoer = (day) => {
        switch (day) {
            case day = "Mon": 
                return "#ffff00";
            case day = "Tue": 
                return "#ffc0cb";
            case day = "Wed": 
                return "#008000";
            case day = "Thu": 
                return "#ffa500";
            case day = "Fri": 
                return "#00bfff";
            case day = "Sat": 
                return "#800080";
            case day = "Sun": 
                return "#ff0000";
            default:
                return "#008000";
        }
    }
{/* <>------------------------------------------------------------------------</> */}
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
{/* <>------------------------------------------------------------------------</> */}
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
                                <MaterialCommunityIcons name="face-man" size={40} color="black" />        
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
                                // style={styles.dayL}
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
                                    {/* <TouchableOpacity onPress={()=>delMemo(item.id)}> */}
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
        backgroundColor: "#0074CC",
    },
    row: {
        flexDirection: "row",
        // justifyContent: "space-between",
        paddingVertical: 0,
        paddingHorizontal:0,
    },
    title: {
        fontSize: 18,
        margin : 1,
    },
    item: {
		backgroundColor: "#ffff",
		marginVertical: 10,
		marginHorizontal: 10,
        borderRadius:10,
		// justifyContent: "space-between",
	},
    titleXl:{
        fontSize: 25,
        margin : 5,
    },
    // textP:{
    //     display:"flex",
    //     // flex-direction: row | row-reverse | column | column-reverse;

    // },
    dayL:{
        // backgroundColor:"red",
        width:"30%",
        paddingLeft:5,
        paddingTop:5,
        borderTopLeftRadius:10,
        borderEndStartRadius:10,
    },
    dayContext:{
        padding:5,
        // justifyContent: "space-between",
    },
    Titem:{
        justifyContent:"center",
        // justifyContent: "space-between",
        // alignItems:"flex-end"
    },
    mainCard:{
        flexDirection: "row",
    }
});

export default IndexScreen;