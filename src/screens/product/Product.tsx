import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const LIMIT = 20;

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const pageRef = useRef(0);
  
  const getProducts = async (pageNo: number): Promise<void> => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${pageNo * LIMIT}`,
      );

      const newData: Product[] = res.data.products;

      setProducts(prev => [...prev, ...newData]);

      if (newData.length < LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(0);
  }, []);

  const loadMore = () => {
    if (loading || !hasMore) return;
    pageRef.current += 1;
    getProducts(pageRef.current);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={{ padding: 15 }}>
      <Image
        source={{ uri: item.thumbnail }}
        resizeMode="cover"
        style={{ width: '100%', height: 200 }}
      />
      <Text>{item.title}</Text>
      <Text>₹ {item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default Product;
