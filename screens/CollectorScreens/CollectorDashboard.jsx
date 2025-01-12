import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import Loader from "../Loader";

const dummyData = [
  { id: 1, location: "Main Street", status: "Collected", time: "09:30 AM" },
  { id: 2, location: "Park Avenue", status: "Pending", time: "10:15 AM" },
  { id: 3, location: "Beach Road", status: "Collected", time: "11:00 AM" },
  { id: 4, location: "Market Square", status: "Pending", time: "01:45 PM" },
  { id: 5, location: "School Zone", status: "Collected", time: "02:30 PM" },
];

export default function CollectorDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [garbagePointName, setGarbagePointName] = useState("");

  const handleSave = () => {
    console.log("Saving:", { garbagePointName });
    setModalVisible(false);
    setGarbagePointName("");
  };

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

  const totalUsers = 2;
  const maxUsers = 3;

  const totalWaste = 60;
  const maxWaste = 100;

  const totalFeedBack = 90;
  const maxFeedBack = 100;


  return (
    <View style={styles.containerpp}>
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
      </View>
      <ImageBackground
        source={{ uri: "https://example.com/leaf-pattern.jpg" }}
        style={styles.backgroundImage}
      >
        <View style={styles.container1}>
          <ScrollView style={styles.dataContainer}>
            {dummyData.map((item) => (
              <View key={item.id} style={styles.dataItem}>
                <View style={styles.locationContainer}>
                  <Ionicons name="location" size={18} color="#4CAF50" />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text
                    style={[
                      styles.status,
                      {
                        color:
                          item.status === "Collected" ? "#4CAF50" : "#FFD700",
                      },
                    ]}
                  >
                    {item.status}
                  </Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Add Garbage Point</Text>

              <TextInput
                style={styles.input}
                placeholder="Garbage Point Name"
                value={garbagePointName}
                onChangeText={setGarbagePointName}
                placeholderTextColor="#88A788"
              />

              <View style={styles.imageContainer}>
                <Ionicons name="camera" size={50} color="#4CAF50" />
                <Text style={styles.imageText}>Tap to take a photo</Text>
              </View>

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerpp: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
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

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container1: {
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
  dataContainer: {
    flex: 1,
  },
  dataItem: {
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    marginLeft: 5,
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  cameraButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2E7D32",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#4CAF50",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#2E7D32",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(76, 175, 80, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderStyle: "dashed",
  },
  imageText: {
    marginTop: 10,
    color: "#4CAF50",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingHorizontal: 30,
  },
  closeButtonText: {
    color: "#2E7D32",
    fontWeight: "bold",
    textAlign: "center",
  },
});
