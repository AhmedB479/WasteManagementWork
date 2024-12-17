import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LottieView from "lottie-react-native";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome To Go Green</Text> */}
      <View>
        <Image
          source={require("../assets/log.png")}
          style={{
            height: 250,
            width: 250,
            filter: "  filter: drop-shadow(10px 7px 10px rgb(84, 116, 84))",

          }}
          resizeMode="contain"a
        />
      </View>

      {/* Lottie Animation */}
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/truck-animation.json")} // Place the animation JSON file locally
          autoPlay
          loop
          style={{ width: 200, height: 300 }}
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
    backgroundColor: "rgb(71, 155, 71)",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    // borderColor: "rgb(0, 255, 0)",
    // borderWidth: 2,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
