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
  Home: undefined;
  ProductPagination: undefined;
  Details: { item: ProductInfo };
};
