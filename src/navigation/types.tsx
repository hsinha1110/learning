import Routes from '../constant/Routes';
import { ProductInfo } from '../types';

export type MainStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PRODUCT]: undefined;
  [Routes.PRODUCT_PAGINATION]: undefined;
  [Routes.DETAILS]: { item: ProductInfo };
  [Routes.CART]: undefined;
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
