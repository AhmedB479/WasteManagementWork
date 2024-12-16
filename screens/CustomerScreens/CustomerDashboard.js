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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function CustomerDashboard({ navigation }) {

 const [curLoc, setCurLoc] = useState({
   latitude: 24.8227,
   longitude: 67.06, 
 });

  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const mapRef = useRef(null);

  // Sample history data
  const history = [
    { id: "1", name: "Ada Lovelace", date: "2024-12-10" },
    { id: "2", name: "Alan Turing", date: "2024-12-11" },
    { id: "3", name: "Grace Hopper", date: "2024-12-12" },
  ];

  // These delta values control zoom
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = 0.0421;

  // Function to request location permission and get current location
  const getLocation = async () => {
    // Request permission to access location
    const { status } = await Location.requestPermissionsAsync();
    setHasLocationPermission(status === "granted");

    if (status === "granted") {
      // Get the current location
      const location = await Location.getCurrentPositionAsync({});
      setCurLoc({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  // Update location every 5 seconds (or as needed)
  useEffect(() => {
    getLocation(); // Get the initial location

    const locationInterval = setInterval(() => {
      getLocation(); // Update location periodically
    }, 5000); // Updates every 5 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(locationInterval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {/* Location */}
          <View style={styles.graphPlaceholder}>
            <MapView
              ref={mapRef}
              style={StyleSheet.absoluteFillObject}
              initialRegion={{
                latitude: curLoc.latitude,
                longitude: curLoc.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              showsUserLocation={true} // Show user's location
              followsUserLocation={true} // Keep updating map as location changes
            >
              {/* Add marker for current location */}
              <Marker coordinate={curLoc} title="Current Location" />
            </MapView>
          </View>

          {/* History */}
          <Text
            style={styles.sectionTitle}
            
          >
            History
          </Text>
          <FlatList
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
                <Text style={styles.collectorAmount}>{item.date}</Text>
              </View>
            )}
          />
          {/* Customer Care Section */}
          <View
            style={{
              padding: 20,
            }}
          >
            {history.length > 0 ? (
              history.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.customerCareButton}
                  onPress={() => navigation.navigate("HistoryScreen", { item })}
                >
                  <Text style={styles.customerCareButtonText}>
                    {item.name}, {item.date}
                  </Text>
                  <Ionicons name="chevron-forward" size={24} color="#6a11cb" />
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.customerCareButtonText}>No History</Text>
            )}
          </View>
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
    padding: 0,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
    paddingHorizontal: 20,
  },
  graphPlaceholder: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    height: 300,
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
});
