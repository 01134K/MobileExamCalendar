import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";
const EditScreen = ({ route,navigation }) => {
    const { state,editMemo } = useContext(Context);
    const id = route.params.id;

    const memo = state.find((memo)=>memo.id===id);
    //console.log(memo);
    return (
        <View style={styles.container}>
            <Text> Edit Screen : {id}</Text>
            <MemoForm initValues = {{
                day:memo.day,
                timeS:memo.timeS,
                timeE:memo.timeE,
                subjectCode:memo.subjectCode,
                subjectM:memo.subjectM,
                subject:memo.subject, 
                room:memo.room,
                teacher:memo.teacher, 
                title:memo.title, 
                description:memo.description, 
            }}
            onSubmit={(day,timeS, timeE, subjectCode, subjectM, subject, room, teacher, title, description,)=>{
                editMemo(
                    id,
                    day,
                    timeS,
                    timeE,
                    subjectCode,
                    subjectM,
                    subject, 
                    room,
                    teacher, 
                    title, 
                    description, 
                )
                navigation.pop();
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});

export default EditScreen;