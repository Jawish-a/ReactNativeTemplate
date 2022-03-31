import React from 'react';
import useAppState from 'react-native-appstate-hook';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import Main from './src/screens/Main';
import { onAppStateChange } from './src/utils/isAppActive';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  const queryClient = new QueryClient();

  useAppState({
    onChange: onAppStateChange,
  });

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
