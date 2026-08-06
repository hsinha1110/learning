import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles';
import Button from '../../components/Button/Button';
export interface User {
  gender: string;
  email: string;
  phone: string;
  cell: string;

  name: {
    title: string;
    first: string;
    last: string;
  };

  location: {
    city: string;
    country: string;
  };

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };

  login: {
    uuid: string;
  };
}
const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadeMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState('');
  let limit = 10;
  useEffect(() => {
    getUsers();
  }, [page]);
  const getUsers = async () => {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=${limit}`,
      );

      const data = await response.data;
      console.log('Data', data);
      if (page === 1) {
        setUsers(data.results);
      } else {
        setUsers(prev => {
          const result = [...prev];
          for (let item of data.results) {
            if (!result.some(user => user.login.uuid === item.id)) {
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
    if (loadeMore) return;
    setPage(prev => prev + 1);
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.picture.large }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>
          {item.name.first} {item.name.last}
        </Text>

        <Text style={styles.info}>📧 {item.email}</Text>

        <Text style={styles.info}>📞 {item.phone}</Text>

        <Text style={styles.info}>
          🌍 {item.location.city}, {item.location.country}
        </Text>

        <Text style={styles.info}>🚻 {item.gender}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.login.uuid}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />

      {users.length > 0 &&
        (loadeMore ? (
          <ActivityIndicator
            size="large"
            color="orange"
            style={{ marginVertical: 20 }}
          />
        ) : (
          <Button title="Load More" onPress={loadMore} />
        ))}
    </View>
  );
};

export default Users;
