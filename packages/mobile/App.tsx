/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import ShareComponent from '@my-app/app';
import Header from '@my-app/app/src/Header';
import {deviceId} from '@my-app/app/src/DeviceInfo';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {VALUE} from '@utils/index';

import RNText from '@components/RNText';
const App = () => {
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
        <Header title="App mobile 2" />
        <ShareComponent title="mobile" />
        <RNText />
        <Text>{VALUE}</Text>
        <Text>{deviceId}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
