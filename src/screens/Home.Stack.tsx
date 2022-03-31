import { View, Text, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home.Screen';
import { AnotherScreen } from './Another.Screen';
import { AppText } from '../components/common/AppText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabStack } from './Tab.Stack';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Another" component={AnotherScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
