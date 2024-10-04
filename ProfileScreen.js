// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name: John Doe</Text>
      <Text style={styles.label}>Email: johndoe@example.com</Text>
      <Text style={styles.label}>Phone: +1234567890</Text>
      {/* Add more user information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFAFA', // Snow background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8A2BE2', // Blue Violet color for title
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    color: '#2F4F4F', // Dark Slate Gray color for labels
  },
});

export default ProfileScreen;
