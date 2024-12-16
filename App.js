import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import AdminPanel from './screens/AdminPanel';
import CustomerPanel from './screens/CustomerPanel';
import GarbageCollectorPanel from './screens/GarbageCollectorPanel';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AdminPanel" component={AdminPanel} />
          <Stack.Screen name="CustomerPanel" component={CustomerPanel} />
          <Stack.Screen name="GarbageCollectorPanel" component={GarbageCollectorPanel} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

