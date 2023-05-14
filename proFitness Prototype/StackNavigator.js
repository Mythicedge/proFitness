import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Tabs from './tabs';
import BMICalculator from './screens/BMICalculator';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FitScreen" component={FitScreen} options={{ headerShown: false }} />
        <Stack.Screen name ="RestScreen" component={RestScreen} options={{headerShown: false}}/>
        <Stack.Screen name ="BMI" component={BMICalculator} options={{headerShown: false}}/>
        <Stack.Screen name ="Tabs" component={Tabs} options={{headerShown: false}} independent={true}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})