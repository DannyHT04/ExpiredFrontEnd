import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SplashScreen from './Screens/SplashScreen';
import GroceryListScreen from './Screens/GroceryListScreen';
import FooterComponent from './Components/FooterComponent';


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
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        /> */}
        <Stack.Screen
          name='Footer'
          component={FooterComponent}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: "Splash" }}
        />
        <Stack.Screen
          name="GroceryList"
          component={GroceryListScreen}
          options={{ title: "GroceryList" }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
