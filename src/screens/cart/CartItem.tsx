import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  decreaseQty,
  increaseQty,
  removefromCart,
} from '../../redux/slices/CartSlice';
import styles from './styles';

interface Props {
  item: any;
}

const CartItem: FC<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>₹ {item.price}</Text>

        <View style={styles.bottomContainer}>
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))}>
              <Text style={styles.qtyButton}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{item.qty}</Text>

            <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))}>
              <Text style={styles.qtyButton}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => dispatch(removefromCart(item.id))}
          >
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
