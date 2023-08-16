import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome.js'
import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './navigation/TabNavigator.js';
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Welcome"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Home" component={TabNavigator} />
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
