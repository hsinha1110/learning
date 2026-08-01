import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductInfo } from '../../types';
import styles from './styles';

let LIMIT = 10;
const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<'products' | 'users'>(
    'products',
  );
  const [total, setTotal] = useState<number>(0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  // ===================  Get Products Api  ==========================

  const getProducts = async () => {
    const skip = (page - 1) * LIMIT;

    try {
      page === 1 ? setLoading(true) : setLoadingMore(true);
      setError('');

      const url =
        selectedTab === 'products'
          ? 'https://fakestoreapi.com/products'
          : `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

      const response = await fetch(url);
      const data = await response.json();

      if (selectedTab === 'products') {
        setProducts(data);
      } else {
        setTotal(data.total);

        if (page === 1) {
          setProducts(data.products);
        } else {
          setProducts(prev => [
            ...prev,
            ...data.products.filter(
              (item: any) => !prev.some(p => p.id === item.id),
            ),
          ]);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  // =================== Filter Products ========================== //
  const filterProducts = products.filter((item: ProductInfo) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    getProducts();
  }, [selectedTab, page]);

  useEffect(() => {
    setPage(1);
    setProducts([]);
    setTotal(0);
  }, [selectedTab]);
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
  const loadMore = () => {
    if (loadingMore || loading) return;

    if (products.length < total) {
      setPage(prev => prev + 1);
    }
  };
  // =================== Render Item  ========================== //
  const renderItem = ({ item }: { item: ProductInfo }) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: selectedTab === 'products' ? item?.image : item?.images[0],
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
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'products' && styles.activeTab]}
          onPress={() => setSelectedTab('products')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'products' && styles.activeTabText,
            ]}
          >
            Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'users' && styles.activeTab]}
          onPress={() => setSelectedTab('users')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'users' && styles.activeTabText,
            ]}
          >
            Users
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Search Products ....."
        value={search}
        onChangeText={setSearch}
        style={styles.inputStyle}
      />
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.noProduct}>No Product Found</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Product;
