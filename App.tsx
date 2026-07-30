import {
  View,
  Text,
  Keyboard,
  AppState,
  Dimensions,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
const App = () => {
  // useEffect(() => {
  //   let subscription = setInterval(() => {
  //     console.log('React Native');
  //   }, 1000);
  //   return () => {
  //     clearInterval(subscription);
  //   };
  // }, []);

  // useEffect(() => {
  //   let intervalId = setTimeout(() => {
  //     console.log('React Native');
  //   }, 1000);
  //   return () => {
  //     clearTimeout(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   const listener = Keyboard.addListener('keyboardDidShow', () => {
  //     console.log('Keyboard Open');
  //   });
  //   return () => {
  //     listener.remove();
  //   };
  // }, []);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextState => {
  //     console.log(nextState);
  //     if (nextState === 'active') {
  //       console.log('Active');
  //     }

  //     if (nextState === 'background') {
  //       console.log('Background');
  //     }
  //   });
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', ({ window }) => {
  //     console.log(window.width, window.height);
  //   });
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     console.log(state.isConnected, 'Net Connected');
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Exit App', 'Are you sure?', [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Yes',
  //         onPress: () => BackHandler.exitApp(),
  //       },
  //     ]);
  //     return true;
  //   };

  //   const subscription = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return <MainNavigation />;
};

export default App;
