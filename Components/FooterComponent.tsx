import { FC, useState } from "react";
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import GroceryListScreen from '../Screens/GroceryListScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function FooterComponent() {
  return (
    <Tab.Navigator initialRouteName="Home"
    activeColor="#E9E9E1"
    barStyle={{ backgroundColor: '#393939' }}>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Grocery List" component={GroceryListScreen}
      options={{
        tabBarLabel: 'Grocery List',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="receipt" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default FooterComponent;