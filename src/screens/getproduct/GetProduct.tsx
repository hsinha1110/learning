import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getProductThunk } from '../../redux/thunk/getProductThunk';
import styles from './styles';

const GetProduct: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { GetProducts, loading, error } = useSelector(
    (state: any) => state.getProduct,
  );

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = GetProducts.reduce((acc: string[], item: any) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  const filteredProducts =
    selectedCategory === 'All'
      ? GetProducts
      : GetProducts.filter((item: any) => item.category === selectedCategory);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);
  categories.unshift('All');

  if (loading) {
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

  const renderProduct = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Categories */}
      <View>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setSelectedCategory(item)}
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.selectedCategory,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>
      {/* Products */}
      <FlatList
        style={{ flex: 1 }}
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default GetProduct;
