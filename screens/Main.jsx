import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Go Green</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login", { role: "customer" })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue as Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login", { role: "collector" })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue as Collector</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login", { role: "admin" })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue as Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
