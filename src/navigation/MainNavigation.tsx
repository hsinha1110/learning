import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductPagination">
        <Stack.Screen
          name="ProductPagination"
          component={Screens.ProductPagination}
        />
        <Stack.Screen name="Product" component={Screens.Product} />
        <Stack.Screen name="Details" component={Screens.Details} />
        <Stack.Screen name="Home" component={Screens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
