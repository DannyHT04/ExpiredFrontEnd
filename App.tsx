import "intl";
import { Platform } from "react-native";

if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}

import "intl/locale-data/jsonp/en";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreateAccountScreen from "./Screens/CreateAccountScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SplashScreen from "./Screens/SplashScreen";
import GroceryListScreen from "./Screens/GroceryListScreen";
import FooterComponent from "./Components/FooterComponent";
import UserContext, { UserProvider } from './Context/UserContext';

import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-paper-toast';
import  UseUser  from './Hooks/UseUser';
import CameraComp from "./Components/CameraComp";
import CameraPreview from "./Components/CameraPreview";


type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Profile: undefined;
  Splash: undefined;
  GroceryList: undefined;
  Footer: undefined;
  CameraOpenerComp: undefined,
  CameraComp: undefined,
  CameraPreview: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  
  return (
    <UserProvider>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <PaperProvider theme={DefaultTheme}>
      <ToastProvider>    
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Footer'
          component={FooterComponent}
          options={{ headerShown: false}}
        />

        <Stack.Screen
          name="GroceryList"
          component={GroceryListScreen}
          options={{ headerShown:false }}
        />
       
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="CameraComp"
          component={CameraComp}
        />
        <Stack.Screen
          name="CameraPreview"
          component={CameraPreview}
        />
      </Stack.Navigator>
    </NavigationContainer> 
    </ToastProvider>
    </PaperProvider>
    </SafeAreaProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
