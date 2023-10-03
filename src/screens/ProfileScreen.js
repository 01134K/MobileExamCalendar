import React, { useContext } from "react";
import { View, Text, StyleSheet,Image} from "react-native";
import pic from "../pic/PPic.jpeg"
const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image
                    style={styles.PicLogo}
                    source={require("../pic/PPic.jpeg")}
                />
                <Text style={styles.titleXl}>
                    ชื่อ : นาย ชนม์ธนวัฒน์ แก้วกัณฑ์
                </Text>
                <Text style={styles.titleXl}>
                    รหัสนักศึกษา : 6421600042
                </Text>
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
    item: {
		backgroundColor: "#ffff",
		marginVertical: 10,
		marginHorizontal: 10,
        borderRadius:10,
		justifyContent: "center",
        alignItems:"center",
	},
    titleXl:{
        fontSize: 25,
        margin : 5,
    },
    PicLogo:{
        borderRadius:"100%",
        height:"50%",
        width:"50%"
    }
    
});

export default ProfileScreen;