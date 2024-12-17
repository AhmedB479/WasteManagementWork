import React, { useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/truck-animation.json")} // Place the animation JSON file locally
          autoPlay
          loop
          style={{ width: 200, height: 300 }}
        />
      </View>
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // margin:50,
  },
});
