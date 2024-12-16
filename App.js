import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import AdminDashboard from './screens/AdminScreens/AdminDashboard';
import CustomerPanel from './screens/CustomerPanel';
import GarbageCollectorPanel from './screens/GarbageCollectorPanel';
import Signup from './screens/Signup';
import CustomerCareScreen from './screens/AdminScreens/CustomerCare';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name="Login" component={LoginScreen} /> */}
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="CustomerCare" component={CustomerCareScreen}/>
          {/* <Stack.Screen name="CustomerPanel" component={CustomerDashboard} />
          <Stack.Screen name="GarbageCollectorPanel" component={GarbageCollectorPanel} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

