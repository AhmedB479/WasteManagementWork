import React, { useEffect, useState } from 'react';
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
import CircularProgress from "react-native-circular-progress-indicator";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Loader from '../Loader';

const screenWidth = Dimensions.get("window").width;

export default function AdminDashboard({ navigation }) {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    // Show the Loader component while loading
    return <Loader />;
  }

  const garbageCollectors = [
    { id: '1', name: 'Ada Lovelace', amount: '$1200.50' },
    { id: '2', name: 'Mark Hopper', amount: '$932.25' },
    { id: '3', name: 'Margaret Hamilton', amount: '$815.40' },
  ];

    const totalUsers = 2;
    const maxUsers = 3;

    const totalWaste = 60;
    const maxWaste = 100;

    const totalFeedBack = 90;
    const maxFeedBack = 100;

    const garbageData = [50, 80, 45, 90, 100, 60, 70]; // Example data for garbage collected
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {/* Top Section */}
          <View style={styles.row}>
            <View style={styles.card}>
              {/* <Text style={styles.cardTitle}>Total User</Text>
              <Text style={styles.cardValue}>2K+</Text> */}
              <CircularProgress
                value={totalUsers} // Current number of users
                radius={50} // Circle size
                maxValue={maxUsers} // Maximum number of users
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor="#3498db"
                inActiveStrokeColor="#ecf0f1"
                title="Total Users"
                titleStyle={{ fontSize: 12, color: "#34495e" }}
                valueSuffix="K" // Adds 'K' after the value
                valueStyle={{ fontSize: 20, fontWeight: "bold" }}
                showProgressValue={true}
                // progressValueStyle={{ display: "none" }} // Hides default percentage value
              />
            </View>
            <View style={styles.card}>
              {/* <Text style={styles.cardTitle}>E-Waste Collection</Text>
              <Text style={styles.percentageRed}>40%</Text> */}
              <CircularProgress
                value={totalWaste} // E-Waste percentage
                radius={50}
                maxValue={maxWaste}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor="#27ae60"
                inActiveStrokeColor="#ecf0f1"
                title="E-Waste"
                titleStyle={{ fontSize: 12, color: "#34495e" }}
                valueSuffix="%"
                valueStyle={{ fontSize: 20, fontWeight: "bold" }}
              />
            </View>
            <View style={styles.card}>
              {/* <Text style={styles.cardTitle}>Customer Feedback</Text>
              <Text style={styles.percentageBlue}>90%</Text> */}
              <CircularProgress
                value={totalFeedBack} // Feedback percentage
                radius={50}
                maxValue={maxFeedBack}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor="#f39c12"
                inActiveStrokeColor="#ecf0f1"
                title="Feedback"
                titleStyle={{ fontSize: 12, color: "#34495e" }}
                valueSuffix="%"
                valueStyle={{ fontSize: 20, fontWeight: "bold" }}
              />
            </View>
          </View>

          {/* Garbage Collected */}
          <Text style={styles.sectionTitle}>Bins Collected Last Month</Text>
          {/* <View style={styles.graphPlaceholder}>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/100/graph.png",
              }}
              style={{ width: "100%", height: 100, resizeMode: "contain" }}
            />
          </View> */}
          <BarChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: garbageData,
                },
              ],
            }}
            width={screenWidth - 40} // Adjust to screen width
            height={220}
            yAxisLabel=""
            yAxisSuffix=" bins"
            chartConfig={{
              backgroundGradientFrom: "#f4f4f4",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0, // No decimals
              color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
            }}
            style={{
              marginVertical: 10,
              borderRadius: 10,
            }}
          />

          {/* Garbage Collectors */}
          <Text style={styles.sectionTitle}>Garbage Collectors</Text>
          <FlatList
            data={garbageCollectors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.collectorItem}>
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios/50/user.png",
                  }}
                  style={styles.avatar}
                />
                <Text style={styles.collectorName}>{item.name}</Text>
                <Text style={styles.collectorAmount}>{item.amount}</Text>
              </View>
            )}
          />
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
    backgroundColor: '#fff',
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

