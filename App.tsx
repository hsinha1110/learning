import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import AuthNavigation from './src/navigation/AuthNavigation';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkToken = useCallback(async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    setToken(accessToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    checkToken();

    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') {
        checkToken();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [checkToken]);

  if (loading) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {token ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
