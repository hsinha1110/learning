import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles';
import Button from '../../components/Button/Button';

interface User {
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const [pages, setPages] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const limit = 10;

  useEffect(() => {
    getPosts();
  }, [pages]);

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

  const loadMore = () => {
    if (loadingMore) return;
    setPages(prev => prev + 1);
  };
  const renderItem = ({ item }: { item: User }) => {
    return (
      <View style={styles.card}>
        <View style={styles.idContainer}>
          <Text style={styles.id}>{item.id}</Text>
        </View>

        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>

          <Text numberOfLines={3} style={styles.body}>
            {item.body}
          </Text>
        </View>
      </View>
    );
  };
  const getPosts = async () => {
    try {
      if (pages === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=${limit}`,
      );

      const data = await response.data;

      console.log(data);

      if (response.status !== 200) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      if (pages === 1) {
        setUsers(data);
      } else {
        setUsers(prev => {
          const result = [...prev];
          for (let item of data) {
            if (!result.some(user => user.id === item.id)) {
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

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
      />

      {users.length > 0 && loadingMore ? (
        <ActivityIndicator size={'large'} color={'orange'} />
      ) : (
        <Button title="Load More" onPress={loadMore} />
      )}
    </View>
  );
};

export default Posts;
