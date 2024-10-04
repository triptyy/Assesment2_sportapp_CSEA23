// CartScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const cartItems = [
  {
    id: 1,
    name: 'AIR LEGGING SPORT',
    price: 'Rp20.000',
  },
  {
    id: 2,
    name: 'AERO SPORT INFINITY MAX',
    price: 'Rp50.000',
  },
  // Add more items as needed
];

const CartScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF', // Light background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E8B57', // Forest Green color for title
  },
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFDEAD', // Navajo White background for items
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#8B0000', // Dark Red color for item name
  },
  itemPrice: {
    color: '#FF4500', // Orange Red color for item price
  },
});

export default CartScreen;
