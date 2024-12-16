import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const AddCollectorScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getDefaultImage = (gender) => {
    return gender === "male"
      ? "https://randomuser.me/api/portraits/men/1.jpg"
      : "https://randomuser.me/api/portraits/women/1.jpg";
  };

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !age.trim() ||
      !cnic.trim() ||
      !address.trim() ||
      !phoneNumber.trim()
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const newCollector = {
      name,
      gender,
      age: parseInt(age, 10),
      cnic,
      address,
      phoneNumber,
      image: getDefaultImage(gender),
    };

    route.params.onAdd(newCollector);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Add Collector</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter collector's name"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="Enter collector's age"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          <Text style={styles.label}>CNIC</Text>
          <TextInput
            style={styles.input}
            value={cnic}
            onChangeText={setCnic}
            placeholder="Enter CNIC number"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter collector's address"
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add Collector</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  submitButton: {
    backgroundColor: "#6a11cb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default AddCollectorScreen;
