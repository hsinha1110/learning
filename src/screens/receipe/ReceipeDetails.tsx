import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constant/Routes';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppButton from '../../components/AppButton/AppButton';

import { HeartIcon as HeartOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartSolid } from 'react-native-heroicons/solid';
type RecipeDetailsRouteProp = RouteProp<
  MainStackParamList,
  Routes.RECEIPE_DETAILS
>;

const ReceipeDetails = () => {
  const route = useRoute<RecipeDetailsRouteProp>();
  const { item } = route.params;

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    checkFavourite();
  }, []);

  const checkFavourite = async () => {
    const data = await AsyncStorage.getItem('FAVOURITES');
    const favourites = data ? JSON.parse(data) : [];

    setIsFavourite(favourites.some((i: any) => i.id === item.id));
  };

  const handleFavourite = async () => {
    const data = await AsyncStorage.getItem('FAVOURITES');
    let favourites = data ? JSON.parse(data) : [];

    const exists = favourites.some((i: any) => i.id === item.id);

    if (exists) {
      favourites = favourites.filter((i: any) => i.id !== item.id);
      setIsFavourite(false);
    } else {
      favourites.push(item);
      setIsFavourite(true);
    }

    await AsyncStorage.setItem('FAVOURITES', JSON.stringify(favourites));
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />

        <AppButton style={styles.favouriteButton} onPress={handleFavourite}>
          {isFavourite ? (
            <HeartSolid size={24} color="red" />
          ) : (
            <HeartOutline size={24} color="#fff" />
          )}
        </AppButton>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.ingredientsContainer}>
          {item.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientChip}>
              <Text style={styles.ingredientText}>🥬 {ingredient}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>

          {item.instructions.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Details</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Cuisine</Text>
          <Text style={styles.value}>{item.cuisine}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Difficulty</Text>
          <Text style={styles.value}>{item.difficulty}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Prep Time</Text>
          <Text style={styles.value}>{item.prepTimeMinutes} mins</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Cook Time</Text>
          <Text style={styles.value}>{item.cookTimeMinutes} mins</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Calories</Text>
          <Text style={styles.value}>{item.caloriesPerServing} kcal</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReceipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },

  content: {
    padding: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },

  value: {
    fontSize: 16,
    color: '#111',
    fontWeight: '700',
  },

  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  ingredientChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  ingredientText: {
    fontSize: 14,
    color: '#222',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  stepNumber: {
    color: '#fff',
    fontWeight: '700',
  },

  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 16,
  },
  favouriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
