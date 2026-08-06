import React, { FC } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../constant/Routes';
import styles from './styles';

type DetailsRouteProp = RouteProp<
  MainStackParamList,
  Routes.CHARACTERS_LIST_DETAILS
>;

const CharaterDetails: FC = () => {
  const { params } = useRoute<DetailsRouteProp>();
  const { item } = params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={{ uri: item.image }}
        style={styles.imageSmall}
        resizeMode="cover"
      />
      <Text style={styles.name}>{item.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{item.status}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Species</Text>
        <Text style={styles.value}>{item.species}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Gender</Text>
        <Text style={styles.value}>{item.gender}</Text>
      </View>
    </ScrollView>
  );
};

export default CharaterDetails;
