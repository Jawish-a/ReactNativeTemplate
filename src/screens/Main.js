import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { API_URL, API_TOKEN } from '@env';
import { AppText } from '../components/AppText';
import { onlineManager } from 'react-query';
import { formatNumbers } from '../utils/formatNumbers';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Path } from 'react-native-svg';

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <AppText
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </AppText>
      <AppText
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </AppText>
    </View>
  );
};

const MyIcon = () => <Icon name="home" size={30} color="#900" />;

export const DashboardIcon = ({
  size = 30,
  color = 'grey',
  focused,
  ...props
}) => (
  <Svg width={size} height={size} fill={color} {...props}>
    <Path d="M0 14.249c.166-.231.319-.49.51-.707 3.785-4.05 7.57-8.088 11.367-12.125 1.631-1.74 4.103-1.89 5.85-.38.178.162.343.339.51.516 3.758 4.01 7.518 8.02 11.29 12.03l.191.204c.382.435.37 1.033 0 1.427-.37.38-.93.38-1.313-.014a12.11 12.11 0 0 1-.662-.747c-.026.013-.051.013-.077.027v12.56c0 1.319-.726 2.42-1.86 2.8-.28.095-.6.15-.892.15-6.602.013-13.203.013-19.791 0-1.593 0-2.753-1.25-2.753-2.95V14.412l-.548.584c-.7.748-1.312.666-1.784-.244C0 14.575 0 14.412 0 14.249Zm19.689 13.743h5.084c.714 0 1.007-.327 1.007-1.088V12.685a.64.64 0 0 0-.19-.489c-2.92-3.1-5.825-6.212-8.743-9.311-1.121-1.196-2.587-1.196-3.708 0-2.919 3.1-5.824 6.212-8.742 9.311a.64.64 0 0 0-.192.49V26.93c0 .72.306 1.047.982 1.06h5.11V20.217c0-1.876 1.274-3.221 3.033-3.221h3.224c1.886 0 3.122 1.318 3.122 3.316v7.314c.013.108.013.23.013.367Zm-7.506-.014h5.607c0-.068.013-.109.013-.15v-7.68c0-.68-.446-1.142-1.096-1.155h-3.339c-.777 0-1.185.448-1.185 1.278v7.707Z" />
  </Svg>
);

import FastImage from 'react-native-fast-image';

const YourImage = () => (
  <FastImage
    style={{ width: 200, height: 200 }}
    source={{
      uri: 'https://unsplash.it/400/400?image=1',
      headers: { Authorization: 'someAuthToken' },
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MyIcon />
          <DashboardIcon />
          <YourImage />
          <Section title={API_URL}>
            Edit <Text style={styles.highlight}>Main.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title={formatNumbers('221.335')}>
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
