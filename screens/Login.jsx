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




import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Login = ({ route, navigation }) => {
  // Destructure 'role' from the navigation params
  const { role } = route.params;

  // Function to handle Login button press
  const handleLogin = () => {
    if (role === "admin") {
      navigation.navigate("Admin");
    } else if (role === "collector") {
      // navigation.navigate("Collector");
    } else if (role === "customer") {
      navigation.navigate("Customer");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.roleText}>Role: {role}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

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
    marginBottom: 10,
  },
  roleText: {
    fontSize: 18,
    color: "green",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
