import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Splash from "../screens/Splash";
const Stack = createNativeStackNavigator();
const AppNevigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='Splash'screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
}
export default AppNevigator;
const styles = StyleSheet.create({

})