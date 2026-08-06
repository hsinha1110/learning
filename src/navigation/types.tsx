import Routes from '../constant/Routes';
import { CharacterList, ProductInfo, RecipeProps } from '../types';

export type MainStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PRODUCT]: undefined;
  [Routes.GET_PRODUCT]: undefined;
  [Routes.PRODUCT_PAGINATION]: undefined;
  [Routes.DETAILS]: { item: ProductInfo };
  [Routes.CART]: undefined;
  [Routes.FAVOURITES]: undefined;
  [Routes.POSTS]: undefined;
  [Routes.CHARACTERS_LIST]: undefined;
  [Routes.CHARACTERS_LIST_DETAILS]: { item: CharacterList };
  [Routes.USERS]: undefined;
  [Routes.RECEIPE]: undefined;
  [Routes.RECEIPE_DETAILS]: {
    item: RecipeProps;
  };
  [Routes.FAVOURITE]: undefined;
};
export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
};
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type LoginNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  Routes.LOGIN
>;

export type SignupNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  Routes.SIGN_UP
>;

export type LoginRouteProp = RouteProp<AuthStackParamList, Routes.LOGIN>;

export type SignupRouteProp = RouteProp<AuthStackParamList, Routes.SIGN_UP>;
