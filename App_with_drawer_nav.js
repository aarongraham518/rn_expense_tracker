import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Ionicons} from '@expo/vector-icons';
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

//clear cache  npx expo start -c       
// const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName='User'> */}
      <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
        drawerActiveBackgroundColor: "f0e1ff",
        drawerActiveTintColor: "#3c0a6b",
        // drawerStyle: { backgroundColor: "#ccc" },
      }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{            
            drawerLabel: "Welcome Screen",  
            drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />          
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} options={{             
            drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />          
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Testing app</Text>
    // </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
