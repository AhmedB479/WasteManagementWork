import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useComplaints } from "../../context/ComplaintContext";

const LodgeComplaintScreen = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
  const { addComplaint } = useComplaints();

  const handleSubmit = () => {
    if (!description.trim() || !location.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    addComplaint({
      customer: "Anonymous", // You might want to replace this with actual user info
      nature: description,
      location: location,
    });

    Alert.alert("Success", "Your complaint has been submitted successfully", [
      {
        text: "OK",
        onPress: () => {
          setDescription("");
          setLocation("");
          navigation.navigate("Customer");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default LodgeComplaintScreen;
