import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";
import { BarChart } from "react-native-chart-kit";
import Loader from '../Loader';

const screenWidth = Dimensions.get("window").width;

export default function AdminDashboard({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
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

  const garbageData = [50, 80, 45, 90, 100, 60, 70];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const renderHeader = () => (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <View style={styles.card}>
          <CircularProgress
            value={totalUsers}
            radius={50}
            maxValue={maxUsers}
            activeStrokeWidth={10}
            inActiveStrokeWidth={10}
            activeStrokeColor="#3498db"
            inActiveStrokeColor="#ecf0f1"
            title="Total Users"
            titleStyle={{ fontSize: 12, color: "#34495e" }}
            valueSuffix="K"
            valueStyle={{ fontSize: 20, fontWeight: "bold" }}
            showProgressValue={true}
          />
        </View>
        <View style={styles.card}>
          <CircularProgress
            value={totalWaste}
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
          <CircularProgress
            value={totalFeedBack}
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

      <Text style={styles.sectionTitle}>Bins Collected Last Month</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: garbageData,
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" bins"
        chartConfig={{
          backgroundGradientFrom: "#f4f4f4",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
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

      <Text style={styles.sectionTitle}>Garbage Collectors</Text>
    </View>
  );

  const renderCollectorItem = ({ item }) => (
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
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={garbageCollectors}
        keyExtractor={(item) => item.id}
        renderItem={renderCollectorItem}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listContent: {
    paddingBottom: 20,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  collectorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
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
});

