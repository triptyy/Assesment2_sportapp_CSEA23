import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const items = [
  { id: 1, name: 'AIR LEGGING SPORT', category: 'Apparel', price: 'Rp20.000' },
  { id: 2, name: 'AERO SPORT INFINITY MAX', category: 'Footwear', price: 'Rp50.000' },
  { id: 3, name: 'SPORT - RUNNER BLUE EDITION', category: 'Footwear', price: 'Rp25.000' },
  { id: 4, name: 'SPORT - BAG', category: 'Bag', price: 'Rp35.000' },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = () => {
    if (searchQuery) {
      const results = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for items..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <ScrollView style={styles.resultsContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <View key={item.id} style={styles.itemCard}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No results found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6f7ff', // Light blue background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0056b3', // Dark blue color for header
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#90caf9', // Light blue border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#fff', // White background for input
  },
  searchButton: {
    backgroundColor: '#0288d1', // Blue color for button
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 16,
  },
  itemCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9fbe7', // Light green background for item cards
  },
  itemName: {
    fontWeight: 'bold',
    color: '#388e3c', // Dark green color for item name
  },
  itemCategory: {
    color: '#666', // Gray color for category
  },
  itemPrice: {
    color: '#d32f2f', // Red color for price
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default SearchScreen;
