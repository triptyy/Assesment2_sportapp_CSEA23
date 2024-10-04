// OrderScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
  {
    id: 1,
    items: ['AIR LEGGING SPORT', 'AERO SPORT INFINITY MAX'],
    total: 'Rp70.000',
  },
  {
    id: 2,
    items: ['RUNNING SHOE PRO'],
    total: 'Rp75.000',
  },
  // Add more orders as needed
];

const OrderScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.order}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text style={styles.orderItems}>Items: {item.items.join(', ')}</Text>
      <Text style={styles.orderTotal}>Total: {item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
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
    backgroundColor: '#E6E6FA', // Lavender background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#483D8B', // Dark Slate Blue color for title
  },
  order: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFACD', // Lemon Chiffon background for orders
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  orderId: {
    fontWeight: 'bold',
    color: '#2E8B57', // Forest Green color for order ID
  },
  orderItems: {
    marginTop: 5,
    color: '#00008B', // Dark Blue color for items
  },
  orderTotal: {
    color: '#FF4500', // Orange Red color for total
    marginTop: 5,
  },
});

export default OrderScreen;
