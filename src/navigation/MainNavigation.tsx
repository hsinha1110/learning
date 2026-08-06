import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import Routes from '../constant/Routes';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.RECEIPE}>
      <Stack.Screen name={Routes.RECEIPE} component={Screens.Receipe} />
      <Stack.Screen
        name={Routes.RECEIPE_DETAILS}
        component={Screens.ReceipeDetails}
      />
      <Stack.Screen name={Routes.USERS} component={Screens.Users} />

      <Stack.Screen
        name={Routes.CHARACTERS_LIST_DETAILS}
        component={Screens.CharacterDetails}
      />

      <Stack.Screen name={Routes.POSTS} component={Screens.Posts} />

      <Stack.Screen name={Routes.FAVOURITES} component={Screens.Favourites} />

      <Stack.Screen name={Routes.GET_PRODUCT} component={Screens.GetProduct} />

      <Stack.Screen name={Routes.HOME} component={Screens.Home} />

      <Stack.Screen name={Routes.CART} component={Screens.Cart} />

      <Stack.Screen
        name={Routes.PRODUCT_PAGINATION}
        component={Screens.ProductPagination}
      />

      <Stack.Screen name={Routes.PRODUCT} component={Screens.Product} />

      <Stack.Screen name={Routes.DETAILS} component={Screens.Details} />
      <Stack.Screen name={Routes.FAVOURITE} component={Screens.Favourite} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
