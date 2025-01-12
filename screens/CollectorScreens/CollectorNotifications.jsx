import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notificationsData = [
  {
    id: 1,
    title: "New Collection Point",
    message: "A new garbage collection point has been added on Main Street.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Schedule Change",
    message: "Collection time for Park Avenue has been changed to 2 PM.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 3,
    title: "Eco-Friendly Tip",
    message: "Remember to segregate your waste for easier recycling!",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    title: "Collection Completed",
    message: "All points in the Beach Road area have been collected.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    title: "App Update",
    message: "New features available! Update your app for the best experience.",
    time: "1 week ago",
    read: true,
  },
];

export default function CollectorNotifications() {
  return (
    <ImageBackground
      source={{ uri: "https://example.com/leaf-pattern.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.notificationContainer}
          showsVerticalScrollIndicator={false}
        >
          {notificationsData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notificationItem}>
              <View
                style={[
                  styles.notificationDot,
                  item.read ? styles.readDot : styles.unreadDot,
                ]}
              />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginLeft: 10,
  },
  notificationContainer: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  unreadDot: {
    backgroundColor: "#FFD700",
  },
  readDot: {
    backgroundColor: "#4CAF50",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: "#666",
  },
});
