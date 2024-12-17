import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TOTAL_TIME = 1 * 60; // 20 minutes in seconds
const WARNING_TIME = 5 * 60; // 5 minutes in seconds

const GarbageCollectionScreen = ({ navigation }) => {
  const [isCollecting, setIsCollecting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);
  const timerRef = useRef(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isCollecting && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCollecting, timeRemaining]);

  const handleCollectPress = () => {
    if (!isCollecting) {
      setIsCollecting(true);
      // Animate button press
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      setIsCollecting(false);
      setTimeRemaining(TOTAL_TIME);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getColor = () => {
    if (timeRemaining <= WARNING_TIME) {
      return "#ff4444"; // Red
    }
    return "#00C851"; // Green
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.collectButtonContainer,
            { transform: [{ scale: scaleAnim }] },
            { borderColor: getColor() },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.collectButton,
              isCollecting && styles.collectButtonActive,
              { backgroundColor: isCollecting ? getColor() : "transparent" },
            ]}
            onPress={handleCollectPress}
          >
            <Ionicons
              name="trash-outline"
              size={40}
              color={isCollecting ? "#fff" : getColor()}
            />
            <Text
              style={[
                styles.collectButtonText,
                isCollecting && styles.collectButtonTextActive,
                { color: isCollecting ? "#fff" : getColor() },
              ]}
            >
              {isCollecting ? "Stop" : "Collect Garbage"}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={[styles.timerContainer, { borderColor: getColor() }]}>
          <Text style={[styles.timer, { color: getColor() }]}>
            {formatTime(timeRemaining)}
          </Text>
        </View>

        {timeRemaining === 0 && (
          <TouchableOpacity
            style={[styles.notThereButton, { backgroundColor: getColor() }]}
            onPress={() => navigation.navigate("LodgeComplaint")}
          >
            <Text style={styles.notThereButtonText}>Not there yet?</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 50,
  },
  collectButtonContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  collectButton: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  collectButtonActive: {
    backgroundColor: "#00C851",
  },
  collectButtonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  collectButtonTextActive: {
    color: "#fff",
  },
  timerContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 18,
    fontWeight: "600",
  },
  notThereButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  notThereButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default GarbageCollectionScreen;
