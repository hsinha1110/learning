import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles';
import Button from '../../components/Button/Button';
import { CharacterList } from '../../types';
import { MainStackParamList } from '../../navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Routes from '../../constant/Routes';

const CharacterListScreen = () => {
  const [characters, setCharactersList] = useState<CharacterList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const renderItem = useCallback(
    ({ item }: { item: CharacterList }) => (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate(Routes.CHARACTERS_LIST_DETAILS, { item })
        }
      >
        <Image
          source={{ uri: item.image }}
          style={styles.imageSmall}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.info}>🟢 {item.status}</Text>
          <Text style={styles.info}>👽 {item.species}</Text>
          <Text style={styles.info}>🚻 {item.gender}</Text>
        </View>
      </Pressable>
    ),
    [navigation],
  );
  const getCharactersList = async () => {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );

      if (response.status !== 200) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      const data = response.data;
      console.log(data, '.....data');
      if (page === 1) {
        setCharactersList(data.results);
      } else {
        setCharactersList(prev => {
          const result = [...prev];

          for (const item of data.results) {
            if (!result.some(character => character.id === item.id)) {
              result.push(item);
            }
          }

          return result;
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  const loadMore = () => {
    if (loadingMore) return;
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    getCharactersList();
  }, [page]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={'orange'} />
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

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
      />

      {characters.length > 0 && loadingMore ? (
        <ActivityIndicator size={'large'} color={'orange'} />
      ) : (
        <Button
          title={loadingMore ? 'Loading...' : 'Load More'}
          onPress={loadMore}
          disabled={loadingMore}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
