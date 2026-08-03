import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ProductInfo } from '../../types';
import styles from './styles';
import Button from '../../components/Button/Button';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constant/Routes';

const LIMIT = 10;

const FetchProducts: FC = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const fetchProducts = async (currentPage: number) => {
    console.log('🔥 API CALL => Page:', currentPage);
    const skip = (currentPage - 1) * LIMIT;

    try {
      if (!refreshing) {
        if (currentPage === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
      }
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      console.log('First API Products:', data.products);

      setTotal(data.total);

      if (currentPage === 1) {
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
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const loadMore = () => {
    if (loadingMore) return;

    if (products.length >= total) return;

    setPage(prev => prev + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);

    if (page === 1) {
      fetchProducts(1);
    } else {
      setPage(1);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>

        <Button title="Retry" onPress={() => fetchProducts(page)} />
      </View>
    );
  }

  const renderItem = ({ item }: { item: ProductInfo }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(Routes.DETAILS, { item })}
    >
      <Image source={{ uri: item.images[0] }} style={styles.image} />

      <View style={styles.content}>
        <Text>{item.title}</Text>

        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Products..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        autoCapitalize="none"
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
      />

      {search === '' &&
        products.length < total &&
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

export default FetchProducts;
