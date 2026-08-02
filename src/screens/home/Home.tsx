import React, { FC, useEffect, useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import styles from './styles';
import { MainStackParamList, ProductInfo } from '../../types';
import Button from '../../components/Button/Button';
import { addToCart } from '../../redux/CartSlice';
import { useNavigation } from '@react-navigation/native';
import { getProductThunk } from '../../redux/thunk/getProductThunk';
import Routes from '../../constant/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home: FC = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const { Product, loading, error, total } = useSelector(
    (state: any) => state.product,
  );

  const filterProducts = Product.filter((item: ProductInfo) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

  const navigation = useNavigation<NavigationProp>();
  useEffect(() => {
    dispatch(getProductThunk({ page, limit: 10 }));
  }, [dispatch, page]);

  useEffect(() => {
    if (!loading) {
      setLoadingMore(false);
    }
  }, [loading]);
  const renderItem = useCallback(({ item }: any) => {
    return (
      <Pressable
        onPress={() => navigation.navigate(Routes.DETAILS, { item })}
        style={styles.card}
      >
        <Image source={{ uri: item.thumbnail }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={styles.bottomContainer}>
            <Text style={styles.price}>₹ {item.price}</Text>

            <Button
              title="Add to Cart"
              onPress={() => {
                dispatch(addToCart(item));
                navigation.navigate(Routes.CART);
              }}
            />
          </View>
        </View>
      </Pressable>
    );
  }, []);

  if (loading && Product.length === 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.loader}>
        <Text>{error}</Text>
      </View>
    );
  }
  const loadMore = () => {
    if (loadingMore || Product.length >= total) return;
    setLoadingMore(true);
    setPage(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Products..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        style={{ flex: 1 }}
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {Product.length < total && (
        <View>
          {loadingMore ? (
            <ActivityIndicator
              size="large"
              color="orange"
              style={{ marginVertical: 20 }}
            />
          ) : (
            <Button title="Load More" onPress={loadMore} />
          )}
        </View>
      )}
    </View>
  );
};

export default Home;
