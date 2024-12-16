import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import AdminPanel from './screens/AdminPanel';
import CustomerPanel from './screens/CustomerPanel';
import GarbageCollectorPanel from './screens/GarbageCollectorPanel';
import Signup from './screens/Signup';
import { CustomerDashboard, Reports, CustomerCare, GarbageStatus, GPSTracking, Profile, Feedback } from './screens/CustomerScreens/CustomerDashboard'

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CustomerPanel">
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AdminPanel" component={AdminPanel} />
          <Stack.Screen name="CustomerPanel" component={CustomerDashboard} />
          <Stack.Screen name="GarbageCollectorPanel" component={GarbageCollectorPanel} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

