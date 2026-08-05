import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="GetProducts">
      <Stack.Screen name="Favourites" component={Screens.Favourites} />
      <Stack.Screen name="GetProducts" component={Screens.GetProducts} />
      <Stack.Screen name="FetchProducts" component={Screens.FetchProducts} />
      <Stack.Screen name="GetProduct" component={Screens.GetProduct} />
      <Stack.Screen name="Home" component={Screens.Home} />
      <Stack.Screen name="Cart" component={Screens.Cart} />
      <Stack.Screen
        name="ProductPagination"
        component={Screens.ProductPagination}
      />
      <Stack.Screen name="Product" component={Screens.Product} />
      <Stack.Screen name="Details" component={Screens.Details} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
