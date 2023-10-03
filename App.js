import { TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "./src/context/BlogContext";
import { Feather, MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";

import ProfileScreen from "./src/screens/ProfileScreen";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitle: "CASH BOOK 📝",
                        headerStyle: { backgroundColor: "#004880" },
                        headerTintColor: "#fff",
                        
                    }}
                >
                    <Stack.Screen
                        name="Index"
                        component={IndexScreen}
                        options={({ navigation }) => ({
                            headerRight: () => (       

                                    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                                        <Feather name="plus" size={30} color="white" />
                                    </TouchableOpacity>
                            ),
                            // headerLeft: () =>{
                            //     <MaterialCommunityIcons name="face-man" size={24} color="white" />
                            // }
                        })}
                    />
                    <Stack.Screen name="Create" component={CreateScreen} 
                      options={()=>({
                        headerTitle: "Add list",
                      })}
                    />
                    <Stack.Screen name="Edit" component={EditScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen
                        name="Show"
                        component={ShowScreen}
                        options={({ navigation, route }) => ({
                            headerTitle: "Edit list",
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Edit", {
                                            id: route.params.id,
                                        })
                                    }
                                >
                                    <AntDesign name="edit" size={30} color="white" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


