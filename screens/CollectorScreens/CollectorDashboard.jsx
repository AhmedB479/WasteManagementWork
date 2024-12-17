import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Loader from "../Loader";

const screenWidth = Dimensions.get("window").width;

const renderHistoryItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationHeader}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
    <Text style={styles.notificationMessage}>{item.message}</Text>
  </View>
);

export default function CollectorDashboard({ navigation }) {

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
    { id: "1", name: "Ada Lovelace", amount: "4.5" },
    { id: "2", name: "Mark Hopper", amount: "2.5" },
    { id: "3", name: "Margaret Hamilton", amount: "5" },
];

  const totalUsers = 2;
  const maxUsers = 3;

  const totalWaste = 60;
  const maxWaste = 100;

  const totalFeedBack = 90;
  const maxFeedBack = 100;

  const garbageData = [50, 80, 45, 90, 100, 60, 70]; // Example data for garbage collected
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const notification = [
    {
      id: "1",
      title: "New Pickup Assigned",
      message:
        "You have been assigned to collect garbage from Sector 5 today. Start at 8:00 AM.",
      time: "15 mins ago",
    },
    {
      id: "2",
      title: "Route Change Alert",
      message:
        "Due to road construction, the route for today’s collection in Block A has been updated. Check the new map in the app.",
      time: "1 hour ago",
    },
    {
      id: "3",
      title: "Missed Pickup Notice",
      message:
        "Garbage from Sector 3 was not collected yesterday. Reschedule and complete it by 12:00 PM today.",
      time: "3 hours ago",
    },
    {
      id: "4",
      title: "Equipment Maintenance Reminder",
      message:
        "Your garbage truck is due for maintenance this Friday. Ensure it is serviced on time.",
      time: "1 day ago",
    },
    {
      id: "5",
      title: "Community Feedback Received",
      message:
        "Residents from Block C have provided feedback on collection timings. Review and adjust the schedule if needed.",
      time: "2 days ago",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {/* Top Section */}
          <View style={styles.row}>
            <View style={styles.card}>
              <CircularProgress
                value={totalUsers} // Current number of users
                radius={50} // Circle size
                maxValue={maxUsers} // Maximum number of users
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor="#3498db"
                inActiveStrokeColor="#ecf0f1"
                title="Bins Collected"
                titleStyle={{ fontSize: 10, color: "#34495e" }}
                valueSuffix="K" // Adds 'K' after the value
                valueStyle={{ fontSize: 20, fontWeight: "bold" }}
                showProgressValue={true}
              />
            </View>
            <View style={styles.card}>
              <CircularProgress
                value={totalWaste} // E-Waste percentage
                radius={50}
                maxValue={maxWaste}
                activeStrokeWidth={10}
                inActiveStrokeWidth={10}
                activeStrokeColor="#27ae60"
                inActiveStrokeColor="#ecf0f1"
                title="Progress"
                titleStyle={{ fontSize: 12, color: "#34495e" }}
                valueSuffix="%"
                valueStyle={{ fontSize: 20, fontWeight: "bold" }}
              />
            </View>
            <View style={styles.card}>
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
          <Text style={styles.sectionTitle}>Noifications</Text>
          <FlatList
            data={notification}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />

          {/* Garbage Collectors */}
          <Text style={styles.sectionTitle}>Your Ratings</Text>
          <FlatList
            data={garbageCollectors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.ratingItem}>
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios/50/user.png",
                  }}
                  style={styles.avatar}
                />
                <View style={styles.ratingContent}>
                  <Text style={styles.ratingName}>{item.name}</Text>
                  <Text style={styles.ratingDate}>Rating: {item.amount}</Text>
                </View>
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
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0C0C0C",
  },
  backButton: {
    fontSize: 24,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  cardContainer: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  percentageRed: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  percentageBlue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "blue",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  graphPlaceholder: {
    backgroundColor: "#ececec",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  collectorItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    color: "#555",
  },
  collectorAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  customerCareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  customerCareButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6a11cb",
  },
  notificationItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationTime: {
    fontSize: 12,
    color: "#777",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
  },
  ratingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  ratingContent: {
    flex: 1,
  },
  ratingName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  ratingStars: {
    alignSelf: "flex-start",
  },
  ratingDate: {
    fontSize: 12,
    color: "#777",
  },
});
