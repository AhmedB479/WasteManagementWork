import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Pickups = () => {
  const driverLocation = {
    latitude: 24.8307,
    longitude: 67.0311,
  };

  const pickupLocation = {
    latitude: 24.8138,
    longitude: 67.0645,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trash Pickup Request</Text>
      </View>

      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>Order #1234</Text>
        <Text style={styles.orderInfo}>
          Address: 26th Street, Phase 5, DHA, Karachi, Pakistan
        </Text>
        <Text style={styles.orderInfo}>Time: 2:30 PM</Text>
        <Text style={styles.orderInfo}>Items: 2 bags of trash</Text>
      </View>

      <View style={styles.mapContainer}>
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.82,
            longitude: 67.045,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker coordinate={driverLocation}>
            <MaterialCommunityIcons name="truck" size={30} color="#4a90e2" />
          </Marker>
          <Marker coordinate={pickupLocation}>
            <MaterialCommunityIcons name="delete" size={30} color="#f44336" />
          </Marker>
          <Polyline
            coordinates={[driverLocation, pickupLocation]}
            strokeColor="#4a90e2"
            strokeWidth={3}
          />
        </MapView> */}
        <Image
          source={require("../../Images/map.png")}
          style={styles.map}
          resizeMode="cover"
        />
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]}>
          <Text style={styles.buttonText}>Accept Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.declineButton]}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4a90e2",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  orderDetails: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  mapContainer: {
    height: 300,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "#4caf50",
  },
  declineButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Pickups;
