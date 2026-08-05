import React, { FC } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ProductInfo } from '../../types';
import { toggleFavourite } from '../../redux/slices/FavouriteSlice';
import { HeartIcon } from 'react-native-heroicons/solid';
import styles from './styles';
import { AppDispatch } from '../../redux/store';

const Favourites: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const favourites = useSelector((state: any) => state.favourite.favourites);
  const renderItem = ({ item }: { item: ProductInfo }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>

          <Pressable onPress={() => dispatch(toggleFavourite(item))}>
            <HeartIcon size={24} color="red" />
          </Pressable>
        </View>

        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );

  if (favourites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Favourite Products </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favourites}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );
};

export default Favourites;
