import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'AIR LEGGING SPORT',
    category: 'Apparel',
    price: 'Rp20.000',
    image:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c32d1068a6aec593fad5e59d1dcaddb4', // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'AERO SPORT INFINITY MAX',
    category: 'Footwear',
    price: 'Rp50.000',
    image:  'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2859b0b19d978134c7957914b76c63e5',
  },
  {
    id: 3,
    name: 'SPORT - RUNNER BLUE EDITION',
    category: 'Footwear',
    price: 'Rp25.000',
    image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c51b01e8aa0e82d98f7a066da58368d1',
  },
  {
    id: 4,
    name: 'SPORT - BAG',
    category: 'Bag',
    price: 'Rp35.000',
    image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ae404e6f32fb0383cf709c87f391345',
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sport Shop</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Wallet balance: Rp1.000.000</Text>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>SHOP BY CATEGORY</Text>
        <View style={styles.categoryButtons}>
          {['Footwear', 'Bags', 'Apparel'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.forYouTitle}>FOR YOU</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCategory}>{product.category}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff', // Light Alice Blue background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e8b57', // Forest Green color
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#ffe4b5', // Lemon Chiffon background
    marginBottom: 16,
  },
  balanceText: {
    fontSize: 16,
    color: '#8b4513', // Saddle Brown color
  },
  topUpButton: {
    backgroundColor: '#ff6347', // Tomato color for button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  topUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4169e1', // Royal Blue color for category title
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#add8e6', // Light Blue background for category buttons
  },
  categoryText: {
    fontSize: 16,
    color: '#00008b', // Dark Blue color for category text
  },
  forYouTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#b22222', // Fire Brick color for "For You" title
  },
  productsContainer: {
    flexDirection: 'row',
  },
  productCard: {
    width: 120,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#ffe4e1', // Misty Rose background for product cards
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 5,
  },
  productName: {
    fontWeight: 'bold',
    color: '#00008b', // Dark Blue color for product name
  },
  productCategory: {
    color: '#777',
  },
  productPrice: {
    color: '#ff4500', // Orange Red color for product price
  },
});

export default HomeScreen;
