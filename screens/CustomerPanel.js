import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default function CustomerPanel() {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [requests, setRequests] = useState([]);

  const addRequest = () => {
    setRequests([...requests, { id: Date.now().toString(), location: { ...location } }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Panel</Text>
      {/* <MapView
        style={styles.map}
        initialRegion={location}
        onRegionChangeComplete={setLocation}
      >
        <Marker coordinate={location} />
      </MapView> */}
      <Image
        source={require("../Images/map.png")}
        style={styles.map}
        resizeMode="cover"
      />
      <Button title="Request Pickup" onPress={addRequest} />
      <Text>Active Requests: {requests.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

