import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../types';
import styles from './styles';

type DetailsRouteProp = RouteProp<MainStackParamList, 'Details'>;

const Details: FC = () => {
  const route = useRoute<DetailsRouteProp>();

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.price}>₹ {item.price}</Text>

      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default Details;
