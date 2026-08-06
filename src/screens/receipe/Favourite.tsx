import React, { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { RecipeProps } from '../../types';
import ItemReceipe from './ItemReceipe';

const Favourite = () => {
  const [favourites, setFavourites] = useState<RecipeProps[]>([]);

  const getFavourite = async () => {
    const data = await AsyncStorage.getItem('FAVOURITES');

    if (data) {
      setFavourites(JSON.parse(data));
    } else {
      setFavourites([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getFavourite();
    }, [favourites]),
  );

  return (
    <FlatList
      data={favourites}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ItemReceipe item={item} />}
      contentContainerStyle={
        favourites.length === 0 ? { flexGrow: 1 } : undefined
      }
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            No Favourite Recipes
          </Text>
        </View>
      }
    />
  );
};

export default Favourite;
