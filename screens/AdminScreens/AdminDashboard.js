import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AdminDashboard({ navigation }) {
  const garbageCollectors = [
    { id: '1', name: 'Ada Lovelace', amount: '$1200.50' },
    { id: '2', name: 'Mark Hopper', amount: '$932.25' },
    { id: '3', name: 'Margaret Hamilton', amount: '$815.40' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Reports</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/50/000000/trash.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {/* Top Section */}
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total User</Text>
              <Text style={styles.cardValue}>2K+</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>E-Waste Collection</Text>
              <Text style={styles.percentageRed}>40%</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Customer Feedback</Text>
              <Text style={styles.percentageBlue}>90%</Text>
            </View>
          </View>

          {/* Garbage Collected */}
          <Text style={styles.sectionTitle}>Bins Collected Last Month</Text>
          <View style={styles.graphPlaceholder}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/100/graph.png',
              }}
              style={{ width: '100%', height: 100, resizeMode: 'contain' }}
            />
          </View>

          {/* Garbage Collectors */}
          <Text style={styles.sectionTitle}>Garbage Collectors</Text>
          <FlatList
            data={garbageCollectors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.collectorItem}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/ios/50/user.png',
                  }}
                  style={styles.avatar}
                />
                <Text style={styles.collectorName}>{item.name}</Text>
                <Text style={styles.collectorAmount}>{item.amount}</Text>
              </View>
            )}
          />

          {/* Customer Care Button */}
          <TouchableOpacity 
            style={styles.customerCareButton}
            onPress={() => navigation.navigate('CustomerCare')}
          >
            <Text style={styles.customerCareButtonText}>Customer Care</Text>
            <Ionicons name="chevron-forward" size={24} color="#6a11cb" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0C0C0C',
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  cardContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  percentageRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  percentageBlue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  graphPlaceholder: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  collectorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  collectorName: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
  collectorAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  customerCareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  customerCareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6a11cb',
  },
});

