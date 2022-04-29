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

import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-paper-toast';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Profile: undefined;
  Splash: undefined;
  GroceryList: undefined;
  Footer: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <PaperProvider theme={DefaultTheme}>
      <ToastProvider>    
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
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
      </Stack.Navigator>
    </NavigationContainer> 
    </ToastProvider>
    </PaperProvider>
    </SafeAreaProvider>
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
