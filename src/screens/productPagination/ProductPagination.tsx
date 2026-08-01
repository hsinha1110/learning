import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { MainStackParamList, ProductInfo } from '../../types';
import styles from './styles';
import Button from '../../components/Button/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
let limit = 10;

const ProductPagination: FC = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const skip = (page - 1) * limit;

  // =================== Filter Products ========================== //
  const filterProducts = products.filter((item: ProductInfo) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  // =================== Get Products ========================== //
  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data = await response.json();
      console.log(data.images, '.....data');
      setTotal(data.total);

      if (page === 1) {
        setLoading(true);
        setProducts(data.products);
      } else {
        setProducts(prev => {
          const result = [...prev];
          for (let item of data.products) {
            const exist = result.find(p => p.id === item.id);
            if (!exist) {
              result.push(item);
            }
          }
          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  // =================== Load More ========================== //
  const loadMore = () => {
    if (loadingMore || products.length >= total) return;
    setLoadingMore(true);
    setPage(page + 1);
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
      </View>
    );
  }

  useEffect(() => {
    getProducts();
  }, [page]);

  const renderItem = ({ item }: { item: ProductInfo }) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('Details', { item })}
      >
        <Image
          style={styles.image}
          source={{
            uri: item?.images[0],
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Products..."
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
      />
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          filterProducts.length === 0 ? { flexGrow: 1 } : undefined
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.noProduct}>No Products Found</Text>
          </View>
        )}
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

export default ProductPagination;
