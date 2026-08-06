import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeartIcon as HeartOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';

import AppButton from '../../components/AppButton/AppButton';
import styles from './styles';
import { RecipeProps } from '../../types';
import Routes from '../../constant/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/types';

const ItemReceipe = ({ item }: { item: RecipeProps }) => {
  type NavigationProp = NativeStackNavigationProp<
    MainStackParamList,
    Routes.RECEIPE
  >;

  const navigation = useNavigation<NavigationProp>();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    checkFavourite();
  }, []);

  const checkFavourite = async () => {
    const data = await AsyncStorage.getItem('FAVOURITES');
    const favourites: RecipeProps[] = data ? JSON.parse(data) : [];

    setIsFavourite(favourites.some(i => i.id === item.id));
  };

  const handleFavourite = async () => {
    const data = await AsyncStorage.getItem('FAVOURITES');
    let favourites: RecipeProps[] = data ? JSON.parse(data) : [];

    const exists = favourites.some(i => i.id === item.id);

    if (exists) {
      favourites = favourites.filter(i => i.id !== item.id);
      setIsFavourite(false);
    } else {
      favourites.push(item);
      setIsFavourite(true);
    }

    await AsyncStorage.setItem('FAVOURITES', JSON.stringify(favourites));
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(Routes.RECEIPE_DETAILS, { item })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <AppButton style={styles.favouriteButton} onPress={handleFavourite}>
          {isFavourite ? (
            <HeartSolid size={22} color="red" />
          ) : (
            <HeartOutline size={22} color="#fff" />
          )}
        </AppButton>
      </View>

      <Pressable style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Rating</Text>

            <View style={styles.ratingContainer}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.ratingText}>{item.rating.toFixed(1)}/5</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Cuisine</Text>
            <Text>{item.cuisine}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Difficulty</Text>
            <Text>{item.difficulty}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Prep Time</Text>
            <Text>{item.prepTimeMinutes} mins</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Cook Time</Text>
            <Text>{item.cookTimeMinutes} mins</Text>
          </View>
        </View>
      </Pressable>
    </Pressable>
  );
};

export default ItemReceipe;
