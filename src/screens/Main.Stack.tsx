import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnotherScreen } from './Another.Screen';
import { TabStack } from './Tab.Stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './Home.Stack';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NotificationsScreen: React.FC = ({}) => {
  const nav = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => nav.goBack()} title="Go back home" />
    </View>
  );
};

const MainStack: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabStack">
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default MainStack;
