import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '/Users/nicholasleon/hackreactor work/FoodFight/components/HomeScreen.js';
import BattleScreen from '/Users/nicholasleon/hackreactor work/FoodFight/components/BattleScreen.js'
import Congrats from '/Users/nicholasleon/hackreactor work/FoodFight/components/Congrats.js';
import PriceScreen from '/Users/nicholasleon/hackreactor work/FoodFight/components/PriceScreen.js'

export default function App() {

  const Stack = createNativeStackNavigator();
  console.log(HomeScreen)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BattleScreen" component={BattleScreen} />
        <Stack.Screen name="Congrats" component={Congrats} />
        <Stack.Screen name="PriceScreen" component={PriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
