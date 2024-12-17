import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const { width } = Dimensions.get("window");

export default function CustomerDashboard({ navigation }) {
  const [curLoc, setCurLoc] = useState({
    latitude: 24.8227,
    longitude: 67.06,
  });

  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const mapRef = useRef(null);

  // Sample history data
  const history = [
    { id: "1", name: "Ada Lovelace", date: "2024-12-10", status: "Completed" },
    { id: "2", name: "Alan Turing", date: "2024-12-11", status: "In Progress" },
    { id: "3", name: "Grace Hopper", date: "2024-12-12", status: "Scheduled" },
  ];

  // These delta values control zoom
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = 0.0421;

  // Function to request location permission and get current location
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setHasLocationPermission(status === "granted");

    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      setCurLoc({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  useEffect(() => {
    getLocation();
    const locationInterval = setInterval(getLocation, 5000);
    return () => clearInterval(locationInterval);
  }, []);

  const renderHistoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => navigation.navigate("HistoryScreen", { item })}
    >
      <View style={styles.historyItemLeft}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?u=" + item.id }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.historyItemName}>{item.name}</Text>
          <Text style={styles.historyItemDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.historyItemRight}>
        <Text
          style={[
            styles.historyItemStatus,
            { color: getStatusColor(item.status) },
          ]}
        >
          {item.status}
        </Text>
        <Ionicons name="chevron-forward" size={20} color="#6a11cb" />
      </View>
    </TouchableOpacity>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4CAF50";
      case "In Progress":
        return "#FFC107";
      case "Scheduled":
        return "#2196F3";
      default:
        return "#757575";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={30} color="#6a11cb" />
        </TouchableOpacity>
      </View> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: curLoc.latitude,
              longitude: curLoc.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            <Marker coordinate={curLoc} title="Current Location" />
          </MapView>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <FlatList
            data={history}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />

          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate("FullHistory")}
          >
            <Text style={styles.viewAllButtonText}>View All History</Text>
            <Ionicons name="arrow-forward" size={20} color="#6a11cb" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("NewRequest")}
      >
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  mapContainer: {
    height: 250,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333333",
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  historyItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  historyItemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  historyItemDate: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  historyItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyItemStatus: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 10,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: "#F0E6FA",
    borderRadius: 8,
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6a11cb",
    marginRight: 5,
  },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6a11cb",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
