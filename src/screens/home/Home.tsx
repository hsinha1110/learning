import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('Screen Focus');
      return () => {
        console.log('Screen Blur');
      };
    }, []),
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
