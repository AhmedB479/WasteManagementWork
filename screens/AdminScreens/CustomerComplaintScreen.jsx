import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useComplaints } from "../../context/ComplaintContext";

const CustomerComplaintScreen = ({ navigation }) => {
  const { complaints, updateComplaint } = useComplaints();

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

    updateComplaint(id, { priority: nextPriority });
  };

  const renderComplaint = ({ item }) => (
    <View style={styles.complaintCard}>
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
          onPress={() => changePriority(item.id, item.priority)}
          style={[
            styles.priorityBadge,
            { backgroundColor: getPriorityColor(item.priority) },
          ]}
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
        contentContainerStyle={styles.listContainer}
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
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  listContainer: {
    padding: 16,
  },
  complaintCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  complaintHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
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
    marginBottom: 12,
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
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default CustomerComplaintScreen;
