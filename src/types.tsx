import Routes from './constant/Routes';

export interface ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  image: string;
  thumbnail: string;
}

export type MainStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PRODUCT]: undefined;
  [Routes.PRODUCT_PAGINATION]: undefined;
  [Routes.DETAILS]: { item: ProductInfo };
  [Routes.CART]: undefined;
};
