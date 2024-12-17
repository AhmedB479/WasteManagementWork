import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome To Go Green</Text> */}
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={{
            height: 250,
            width: 250,
          }}
          resizeMode="contain"
        />
      </View>

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
    backgroundColor: "#5FCC9C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    borderColor: "#319e4e",
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    color: "#319e4e",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
