import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import { AuthStackParamList } from './types';
import Routes from '../constant/Routes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SIGN_UP}>
      <Stack.Screen name={Routes.LOGIN} component={Screens.Login} />
      <Stack.Screen name={Routes.SIGN_UP} component={Screens.SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
