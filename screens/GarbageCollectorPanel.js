import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function GarbageCollectorPanel() {
  const [requests, setRequests] = useState([
    { id: '1', location: { latitude: 37.78825, longitude: -122.4324 } },
    { id: '2', location: { latitude: 37.78925, longitude: -122.4344 } },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const completeRequest = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    setSelectedRequest(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garbage Collector Panel</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {requests.map((request) => (
          <Marker
            key={request.id}
            coordinate={request.location}
            onPress={() => setSelectedRequest(request)}
          />
        ))}
      </MapView>
      {selectedRequest && (
        <View style={styles.requestInfo}>
          <Text>Request ID: {selectedRequest.id}</Text>
          <Button title="Complete Pickup" onPress={() => completeRequest(selectedRequest.id)} />
        </View>
      )}
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <Text>Request ID: {item.id}</Text>
            <Button title="View on Map" onPress={() => setSelectedRequest(item)} />
          </View>
        )}
      />
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
  requestInfo: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  requestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

