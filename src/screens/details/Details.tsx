import { View, Text, Image } from 'react-native';
import React, { FC } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from './styles';
import Routes from '../../constant/Routes';
import { MainStackParamList } from '../../navigation/types';

type DetailsRouteProp = RouteProp<MainStackParamList, Routes.DETAILS>;

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
