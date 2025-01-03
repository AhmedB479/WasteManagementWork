// import React, { useContext, useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import { AuthContext } from '../context/AuthContext';

// export default function LoginScreen({ navigation }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleLogin = () => {
//     if (!username || !password) {
//       Alert.alert('Error', 'Please enter both username and password.');
//       return;
//     }

//     // Call the login function from AuthContext
//     login(username, password)
//       .then(() => {
//         Alert.alert('Success', 'Login successful!');
//         navigation.navigate('Home'); // Adjust the navigation target based on your app
//       })
//       .catch((err) => {
//         Alert.alert('Error', err.message || 'Login failed.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         placeholderTextColor="#888"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         placeholderTextColor="#888"
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="Login" onPress={handleLogin} color="#4CAF50" />
//       </View>
//       <View style={styles.signupContainer}>
//         <Text style={styles.signupText}>Don't have an account?</Text>
//         <Button
//           title="Signup"
//           onPress={() => navigation.navigate('Signup')}
//           color="#2196F3"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     color: '#333',
//   },
//   buttonContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   signupContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   signupText: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#555',
//   },
// });




import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Loader from "./Loader";

const Login = ({ route, navigation }) => {
  // Destructure 'role' from the navigation params
  const { role } = route.params;

  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Function to handle Login button press
  const handleLogin = () => {
    if (role === "admin") {
      navigation.navigate("Admin");
    } else if (role === "collector") {
      navigation.navigate("Collector");
    } else if (role === "customer") {
      navigation.navigate("Customer");
    }
  };

  if (isLoading) {
    // Show the Loader component while loading
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          // value={email}
          // onChangeText={handleInputChange(setEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // value={password}
          // onChangeText={handleInputChange(setPassword)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Or, Login with
        </Text>
        <View style={styles.imgContainerWrap}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../Images/Google.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require("../Images/Facebook.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require("../Images/Twitter.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "rgb(71, 155, 71)",
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    width: "100%",
    textAlign: "left",
    paddingLeft: 20,
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 5,
    paddingBottom: 2,
    width: "90%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#rgb(71, 155, 71)",
    width: "90%",
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  imgContainerWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    margin: 20,
  },
  imgContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
});

export default Login;
