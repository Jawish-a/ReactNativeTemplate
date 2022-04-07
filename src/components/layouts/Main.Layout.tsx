import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header } from './Header';

type MainLayoutType = {
  title: string;
};

export const MainLayout: React.FC<MainLayoutType> = ({ title, children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, { flex: 1 }]}>
      <Header title={title} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({});
