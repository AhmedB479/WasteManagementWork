import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GarbagePortalScreen = ({ navigation }) => {
  const [collectors, setCollectors] = useState([
    {
      id: "1",
      name: "Ada Lovelace",
      gender: "female",
      age: 35,
      cnic: "1234567890123",
      address: "123 Tech St, Programmerville",
      phoneNumber: "1234567890",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "2",
      name: "Mark Hopper",
      gender: "male",
      age: 42,
      cnic: "9876543210987",
      address: "456 Code Ave, Developertown",
      phoneNumber: "9876543210",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ]);

  const handleEdit = (collector) => {
    navigation.navigate("EditCollector", {
      collector,
      onUpdate: (updatedCollector) => {
        setCollectors(
          collectors.map((c) =>
            c.id === updatedCollector.id ? updatedCollector : c
          )
        );
      },
    });
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Collector",
      "Are you sure you want to delete this collector?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => setCollectors(collectors.filter((c) => c.id !== id)),
        },
      ]
    );
  };

  const renderCollector = ({ item }) => (
    <View style={styles.collectorItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.collectorInfo}>
        <Text style={styles.collectorName}>{item.name}</Text>
        <Text
          style={styles.collectorDetails}
        >{`${item.age} years • ${item.gender}`}</Text>
        <Text style={styles.collectorDetails}>{item.phoneNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleEdit(item)}
      >
        <Ionicons name="pencil" size={18} color="#6a11cb" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => handleDelete(item.id)}
      >
        <Ionicons name="trash" size={18} color="#ff4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={collectors}
        renderItem={renderCollector}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate("AddCollector", {
              onAdd: (newCollector) => {
                setCollectors([
                  ...collectors,
                  {
                    id: String(collectors.length + 1),
                    ...newCollector,
                  },
                ]);
              },
            })
          }
        >
          <Ionicons name="add" size={24} color="#6a11cb" />
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  addButton: {
    position: "absolute", // Absolute positioning
    bottom: 30, // Distance from bottom
    right: 30, // Distance from right
    width: 60,
    height: 60,
    borderRadius: 30, // Make it circular
    backgroundColor: "#f0f0f0", // Background color for better visibility
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Optional shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Add elevation for Android shadow
  },
  list: {
    padding: 20,
  },
  collectorItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  collectorInfo: {
    flex: 1,
  },
  collectorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  collectorDetails: {
    fontSize: 14,
    color: "#666",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default GarbagePortalScreen;
