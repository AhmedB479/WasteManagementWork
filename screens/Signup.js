import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SignUp(navigation){
    
    const Register = () => {

    }
    return(
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Signup" onPress={Register} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
  
