import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Customer Dashboard Screen
export default function CustomerDashboard({ navigation }) {
  const dashboardOptions = [
    { id: 1, title: 'Reports', icon: 'chart-bar', screen: 'Reports' },
    { id: 2, title: 'Customer Care', icon: 'account-group', screen: 'CustomerCare' },
    { id: 3, title: 'Garbage Collection', icon: 'delete', screen: 'GarbageStatus' },
    { id: 4, title: 'Real-time Tracking', icon: 'map-marker', screen: 'GPSTracking' },
    { id: 5, title: 'Profile Management', icon: 'account-circle', screen: 'Profile' },
    { id: 6, title: 'Feedback', icon: 'star', screen: 'Feedback' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Owner Dashboard</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {dashboardOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={50} color="#fff" />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// Placeholder Screens
function Reports() {
  return <ScreenPlaceholder title="Reports Screen" />;
}
function CustomerCare() {
  return <ScreenPlaceholder title="Customer Care Screen" />;
}
function GarbageStatus() {
  return <ScreenPlaceholder title="Garbage Collection Status" />;
}
function GPSTracking() {
  return <ScreenPlaceholder title="GPS Tracking Screen" />;
}
function Profile() {
  return <ScreenPlaceholder title="Profile Management Screen" />;
}
function Feedback() {
  return <ScreenPlaceholder title="Feedback and Rating System" />;
}

// A simple placeholder component for each screen
function ScreenPlaceholder({ title }) {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>{title}</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    height: 150,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
  },
  placeholderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});

// Export components to use them after login
export { CustomerDashboard, Reports, CustomerCare, GarbageStatus, GPSTracking, Profile, Feedback };
