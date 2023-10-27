import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxStyle}>
                <View style={{ marginHorizontal: 70, }}>
                    <Text style={styles.mainTitle}>Member list</Text>
                </View>
                <View style={styles.blogLayer}>
                    <Image
                        source={require('../pic/Game.jpg')}
                        style={styles.imageStyle}
                    />
                    <View style={styles.titlelaout1}>
                        <Text style={styles.name}>นายณภัทรนันท์ ศิลปะ</Text>
                        <Text style={styles.stdId}>6421600069</Text>
                        <Text style={styles.workload}>Workload : 30% for Developer</Text>
                        <Text style={styles.title2}>CSS Developer,Profile.js,add Argorithm </Text>
                    </View>
                </View>
                <View style={styles.blogLayer}>
                    <Image
                        source={require('../pic/Nice.png')}
                        style={styles.imageStyle}
                    />
                    <View style={styles.titlelaout2}>
                        <Text style={styles.name}>นายปวริศ มุ้ยจีน</Text>
                        <Text style={styles.stdId}>6421600123</Text>
                        <Text style={styles.workload}>Workload : 30% for Developer</Text>
                        <Text style={styles.title2}>CSS Developer,ShowScreen.js</Text>
                        <Text style={styles.title2}> Argorithm and Screen </Text>
                    </View>
                </View>
                <View style={styles.blogLayer}>
                    <Image
                        source={require('../pic/PPic.jpeg')}
                        style={styles.imageStyle}
                    />
                    <View style={styles.titlelaout3}>
                        <Text style={styles.name1}>นายชนม์ธนวัฒน์ แก้วกัณฑ์</Text>
                        <Text style={styles.stdId}>6421600042</Text>
                        <Text style={styles.workload}>Workload : 40% for Developer</Text>
                        <Text style={styles.title2}>Sort Argorithm , Day Color Overide </Text>
                        <Text style={styles.title2}>IndexScreen, Control team work</Text>
                    </View>
                </View>
            </View>

            <View>
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0074CC",
        alignItems: "center",
        justifyContent: "center",
    },
    boxStyle: {
        flex: 2,
        width: 360,
        margin: 30,
        justifyContent: 'flex-start',
        alignContent: "flex-start",
        gap: 20,
    },
    mainTitle: {
        color: '#fff'
        , fontSize: 40
        , fontWeight: 'bold'
        , justifyContent: 'center',
        paddingVertical: 10,
    },
    blogLayer: {
        backgroundColor: '#fff',
        height: 160,
        justifyContent: "space-between",
        borderRadius: 30,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 130,
        width: 130,
        borderRadius: 100,
        marginLeft: 10,
        marginVertical: 10,
    },
    titlelaout1: {
        flexDirection: 'column',
        paddingRight: 30,
        paddingVertical: 35,
        gap: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'

    },
    stdId: {
        alignSelf: 'center',
        fontSize: 16,
    },
    titlelaout2: {
        flexDirection: 'column',
        paddingRight: 50,
        paddingVertical: 30,
        gap: 5,
    },
    titlelaout3: {
        flexDirection: 'column',
        paddingRight: 50,
        paddingVertical: 35,
        gap: 5,
    },
    name1: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    title2: {
        fontSize: 10,
        alignSelf: 'center'
    },
    workload: {
        alignSelf: 'center',
        fontSize: 14,
        paddingLeft:5,
    }
});
export default ProfileScreen