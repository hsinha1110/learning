import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProductInfo } from '../../types';
import { MainStackParamList } from '../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon as HeartOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';
import { AppDispatch } from '../../redux/store';
import { toggleFavourite } from '../../redux/slices/FavouriteSlice';
import Button from '../../components/Button/Button';
import Routes from '../../constant/Routes';
import styles from './styles';

let limit = 10;

const GetProducts = () => {
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const favourites = useSelector((state: any) => state.favourite.favourites);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Products',

      headerRight: () => (
        <Pressable
          onPress={() => navigation.navigate(Routes.FAVOURITES)}
          style={{ marginRight: 16 }}
        >
          <HeartSolid size={26} color="red" />
        </Pressable>
      ),
    });
  }, [navigation]);

  const getProducts = async (page: number) => {
    try {
      const skip = (page - 1) * limit;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      console.log('First API Products:', data.products);
      setTotal(data.total);

      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts(prev => {
          const result = [...prev];

          for (const item of data.products) {
            if (!result.some(product => product.id === item.id)) {
              result.push(item);
            }
          }
          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getProducts(pages);
  }, [pages]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={'orange'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText} />
      </View>
    );
  }

  const loadMore = () => {
    if (loadingMore || products.length >= total) return;
    setLoadingMore(true);
    setPages(prev => prev + 1);
  };
  const renderItem = ({ item }: { item: ProductInfo }) => {
    const isFavourite = favourites.some(
      (fav: ProductInfo) => fav.id === item.id,
    );

    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate(Routes.DETAILS, { item })}
      >
        <Image source={{ uri: item.images[0] }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>

            <Pressable
              style={styles.favouriteIcon}
              onPress={() => dispatch(toggleFavourite(item))}
            >
              {isFavourite ? (
                <HeartSolid size={24} color="red" />
              ) : (
                <HeartOutline size={24} color="#555" />
              )}
            </Pressable>
          </View>

          <Text numberOfLines={2} style={styles.description}>
            {item.description}
          </Text>

          <Text style={styles.price}>${item.price}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={5}
      />
      {products.length < total &&
        (loadingMore ? (
          <ActivityIndicator
            size="large"
            color="orange"
            style={{ marginVertical: 20 }}
          />
        ) : (
          <Button title="Load More" onPress={loadMore} />
        ))}
    </View>
  );
};

export default GetProducts;
