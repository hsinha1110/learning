import React, { FC } from 'react';
import { View, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import CartItem from './CartItem';

const Cart: FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const sum = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.qty,
    0,
  );
  const subtotal = Number(sum.toFixed(2));
  const shipping = cartItems.length > 0 ? 100 : 0;
  const grandTotal = Number((subtotal + shipping).toFixed(2));

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentConatinerStyle}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Cart is Empty</Text>
          </View>
        }
      />

      {cartItems.length > 0 && (
        <View style={styles.bottomSummary}>
          <View style={styles.totalContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Subtotal</Text>
              <Text style={styles.value}>₹ {subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Shipping</Text>
              <Text style={styles.value}>₹ {shipping}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.totalLabel}>Grand Total</Text>
              <Text style={styles.totalValue}>₹ {grandTotal.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;
