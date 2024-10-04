import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const notifications = [
  {
    id: 1,
    time: 'Today, 10:20',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    message: "Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!",
  },
  {
    id: 2,
    time: 'Today, 09:05',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    message: 'Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won\'t last long!',
  },
  {
    id: 3,
    time: 'Yesterday, 08:10',
    title: 'GOOD MORNING, RUNNER!',
    message: "It's time to step out and run. Give your best to your body today. Find comfort in every step.",
  },
  {
    id: 4,
    time: 'July 13, 2023, 17:30',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    message: "Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout.",
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTime}>{notification.time}</Text>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
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
    backgroundColor: '#f0f4f8', // Light background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text for the header
  },
  notificationCard: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff', // White background for cards
    marginBottom: 10,
    elevation: 3, // Shadow effect on cards
  },
  notificationTime: {
    fontSize: 12,
    color: '#888', // Gray color for time
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark text for titles
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555', // Medium gray for message text
    marginTop: 4,
  },
});

export default NotificationScreen;
