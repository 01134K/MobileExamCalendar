import React, { useContext } from "react";
import {StyleSheet } from "react-native";
import MemoForm from "../components/MemoForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const { addMemo } = useContext(Context);
    return (
        <MemoForm
            onSubmit={(
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
            ) => {
                addMemo(
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
                );
                navigation.navigate("Index");
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
