import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomerComplaintScreen = ({ navigation }) => {
  const [complaints, setComplaints] = useState([
    {
      id: "1",
      customer: "John Doe",
      nature: "Missed pickup",
      status: "Unaddressed",
      priority: "Normal",
      date: "2023-06-01",
    },
    {
      id: "2",
      customer: "Jane Smith",
      nature: "Rude staff",
      status: "Ongoing",
      priority: "High",
      date: "2023-05-30",
    },
    {
      id: "3",
      customer: "Bob Johnson",
      nature: "Billing issue",
      status: "Complete",
      priority: "Low",
      date: "2023-05-28",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Unaddressed":
        return "#ff4444";
      case "Ongoing":
        return "#ffbb33";
      case "Complete":
        return "#00C851";
      default:
        return "#333";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "#00C851";
      case "Normal":
        return "#33b5e5";
      case "High":
        return "#ffbb33";
      case "Urgent":
        return "#ff4444";
      case "Critical":
        return "#CC0000";
      default:
        return "#333";
    }
  };

  const changePriority = (id, currentPriority) => {
    const priorities = ["Low", "Normal", "High", "Urgent", "Critical"];
    const currentIndex = priorities.indexOf(currentPriority);
    const nextPriority = priorities[(currentIndex + 1) % priorities.length];

    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id
          ? { ...complaint, priority: nextPriority }
          : complaint
      )
    );
  };

  const renderComplaint = ({ item }) => (
    <View style={styles.complaintItem}>
      <View style={styles.complaintHeader}>
        <Text style={styles.customerName}>{item.customer}</Text>
        <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.nature}>{item.nature}</Text>
      <View style={styles.complaintFooter}>
        <Text style={styles.date}>{item.date}</Text>
        <TouchableOpacity
          style={[
            styles.priorityButton,
            { backgroundColor: getPriorityColor(item.priority) },
          ]}
          onPress={() => changePriority(item.id, item.priority)}
        >
          <Text style={styles.priorityText}>{item.priority}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={complaints}
        renderItem={renderComplaint}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  list: {
    padding: 20,
  },
  complaintItem: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  complaintHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
  },
  nature: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  complaintFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  priorityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default CustomerComplaintScreen;
