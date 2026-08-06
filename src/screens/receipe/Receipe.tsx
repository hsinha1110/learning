import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { RecipeProps } from '../../types';
import ItemReceipe from './ItemReceipe';
import AppTextInput from '../../components/Input/AppTextInput';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import { HeartIcon } from 'react-native-heroicons/outline';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constant/Routes';
import { useNavigation } from '@react-navigation/native';
const PAGE_SIZE = 10;

const Receipe: FC = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [allRecipes, setAllRecipes] = useState<RecipeProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

  const navigation = useNavigation<NavigationProp>();
  useEffect(() => {
    getReceipeApi();
  }, [page]);

  const getReceipeApi = async () => {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const skip = (page - 1) * PAGE_SIZE;

      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${PAGE_SIZE}&skip=${skip}`,
      );

      const data = await response.json();

      if (page === 1) {
        setRecipes(data.recipes);
        setAllRecipes(data.recipes);
      } else {
        setRecipes(prev => [...prev, ...data.recipes]);
        setAllRecipes(prev => [...prev, ...data.recipes]);
      }

      setTotal(data.total);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMore = () => {
    if (loadingMore || recipes.length >= total) {
      return;
    }

    setPage(prev => prev + 1);
  };

  const handleSearch = (text: string) => {
    setSearch(text);

    if (!text.trim()) {
      setRecipes(allRecipes);
      return;
    }

    const filtered = allRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(text.toLowerCase()),
    );

    setRecipes(filtered);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="orange" />;
  }
  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}></Text>
      </View>
    );
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={recipes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ItemReceipe item={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      ListHeaderComponent={
        <View style={{ padding: 10 }}>
          <AppTextInput
            placeholder="Search recipes..."
            value={search}
            onChangeText={handleSearch}
          />

          <AppButton
            style={styles.favouriteHeaderButton}
            onPress={() => navigation.navigate(Routes.FAVOURITE)}
          >
            <HeartIcon size={24} color="#fff" />
          </AppButton>
        </View>
      }
      ListFooterComponent={
        loadingMore ? (
          <ActivityIndicator
            size="small"
            color="orange"
            style={{ marginVertical: 20 }}
          />
        ) : null
      }
    />
  );
};

export default Receipe;
