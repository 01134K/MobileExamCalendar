import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ScrollView,SafeAreaView, } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

const dataDate = [
    { label: 'Sunday', value: 'Sun' },
    { label: 'Monday', value: 'Mon' },
    { label: 'Tueday', value: 'Tue' },
    { label: 'Wedday', value: 'Wed' },
    { label: 'Thuday', value: 'Thu' },
    { label: 'Friday', value: 'Fri' },
    { label: 'Satday', value: 'Sat' },
  ];

const MemoForm = ({ onSubmit,initValues }) => {
    // const [day, setday] = useState(initValues.day);
    const [day, setday] = useState(initValues.day);
    const [timeS, settimeS] = useState(initValues.timeS);
    const [timeE, settimeE] = useState(initValues.timeE);
    const [subjectCode, setsubjectCode] = useState(initValues.subjectCode);
    const [subjectM, setsubjectM] = useState(initValues.subjectM);
    const [subject, setsubject] = useState(initValues.subject);
    const [room, setroom] = useState(initValues.room);
    const [teacher, setteacher] = useState(initValues.teacher);
    const [title, settitle] = useState(initValues.title);
    const [description, setdescription] = useState(initValues.description);



    // const date = new Date().toString()
    // const arrDay = date.split(" ");
    // const today = arrDay[0]+" "+arrDay[1]+" "+arrDay[2]+" "+arrDay[3]+" "+arrDay[4]
    // const today = date.getFullYear()+" "+date.getMonth()+" "+today.getDate()+" "date.gr
    return (
        <View style = {styles.container}>
            {/* <SafeAreaView> */}
                <ScrollView>
                    <Text style={styles.label}>Day :</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dataDate}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Day"
                        searchPlaceholder="Search..."
                        value={day}
                        onChange={item => {
                        setday(item.value);
                        }}
                        // renderLeftIcon={() => (
                        // // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />         
                    <Text style={styles.label}>time start:</Text>
                    <TextInput
                        style={styles.input}
                        value={timeS}
                        placeholder="08:00"
                        onChangeText={(text) => settimeS(text)}
                    />
                    <Text style={styles.label}>time end:</Text>
                    <TextInput
                        style={styles.input}
                        value={timeE}
                        placeholder="12:00"
                        onChangeText={(text) => settimeE(text)}
                    />
                    <Text style={styles.label}>subjectCode:</Text>
                    <TextInput
                        style={styles.input}
                        value={subjectCode}
                        placeholder="01418344-60"
                        onChangeText={(text) => setsubjectCode(text)}
                    />

                    <Text style={styles.label}>Class:</Text>
                    <TextInput
                        style={styles.input}
                        value={subjectM}
                        placeholder="700"
                        onChangeText={(text) => setsubjectM(text)}
                    />
                    <Text style={styles.label}>subject:</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        placeholder="Mobile Application Design and Development"
                        onChangeText={(text) => setsubject(text)}
                    />
                    <Text style={styles.label}>room:</Text>
                    <TextInput
                        style={styles.input}
                        value={room}
                        placeholder="SC9-330"
                        onChangeText={(text) => setroom(text)}
                    />
                    <Text style={styles.label}>teacher:</Text>
                    <TextInput
                        style={styles.input}
                        value={teacher}
                        placeholder="วรัทภพ ธภัทรสุวรรณ "
                        onChangeText={(text) => setteacher(text)}
                    />
                    <Text style={styles.label}>title:</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        value={title}
                        onChangeText={(text) => settitle(text)}
                    />
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        value={description}
                        onChangeText={(text) => setdescription(text)}
                    />
                    <TouchableOpacity
                    style={styles.inputB}
                    onPress={() => {
                        onSubmit(
                            day,
                            timeS,
                            timeE,
                            subjectCode,
                            subjectM,
                            subject, 
                            room,
                            teacher, 
                            title, 
                            description,);
                    }}
                    >
                        <Text 
                            style={styles.textB}
                        >
                            Submit
                        </Text>
                    {/* <Button
                        title="Submit Memo"
                        onPress={() => {
                            onSubmit(day, money, title , description);
                        }}
                    /> */}
                    </TouchableOpacity>
                </ScrollView>
            {/* </SafeAreaView> */}
        </View>
    );
};
MemoForm.defaultProps = {
    initValues:{
        id:"",
        day:"",
        timeS:"",
        timeE:"",
        subjectCode:"",
        subjectM:"",
        subject:"", 
        room:"",
        teacher:"", 
        title:"", 
        description:"",
    },
    // initValues:{title:"",content:""},
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0074CC",
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        fontWeight:'bold',
        color:"#fff",
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
        height:60,
        backgroundColor: "#fff",
    },
    inputB: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        margin: 10,
        marginBottom: 15,
        height:60,
        backgroundColor: "#fff",
    },
    textB :{
        fontWeight:'bold',
        fontSize: 25,
        color:"#004880",
    },


    dropdown: {
        backgroundColor:'#fff',
        margin: 16,
        height: 50,
        padding:5,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        borderRadius:5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default MemoForm;
