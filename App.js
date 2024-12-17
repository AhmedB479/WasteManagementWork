// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AuthProvider } from './context/AuthContext';
// import LoginScreen from './screens/LoginScreen';
// import CustomerPanel from './screens/CustomerPanel';
// import GarbageCollectorPanel from './screens/GarbageCollectorPanel';
// import Signup from './screens/Signup';
// import CustomerCareScreen from './screens/AdminScreens/CustomerCare';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {/* <Stack.Screen name='Signup' component={Signup}/>
//           <Stack.Screen name="Login" component={LoginScreen} /> */}
//           <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
//           <Stack.Screen name="CustomerCare" component={CustomerCareScreen}/>
//           {/* <Stack.Screen name="CustomerPanel" component={CustomerDashboard} />
//           <Stack.Screen name="GarbageCollectorPanel" component={GarbageCollectorPanel} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { View, Text, Image, StyleSheet } from "react-native";

// Import your screen components
import Main from "./screens/Main";
import Login from "./screens/Login";
import CustomerCareScreen from "./screens/AdminScreens/CustomerCare";
import AdminDashboard from "./screens/AdminScreens/AdminDashboard";
import GarbagePortalScreen from "./screens/AdminScreens/GarbagePortalScreen";
import AddCollectorScreen from "./screens/AdminScreens/AddCollectorScreen";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import EditCollectorScreen from "./screens/AdminScreens/EditCollectorScreen";
import CustomerComplaintScreen from "./screens/AdminScreens/CustomerComplaintScreen";
import CustomerDashboard from "./screens/CustomerScreens/CustomerDashboard";
// import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/v2/D4D03AQGECoLz8fKYmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731497499828?e=1740009600&v=beta&t=UBUC5WpPn8t1elW2fR0oh3H3auEjjDGS48H8kEje6Hg",
          }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mr. Nasir Ansari</Text> 
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Drawer Navigation for Admin Screens

function AdminDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={AdminDashboard}
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Customer Care"
        component={CustomerCareScreen}
        options={{
          drawerLabel: "Customer Care",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="headset" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Garbage Collectors"
        component={GarbagePortalScreen}
        options={{
          drawerLabel: "Garbage Collectors",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Customer Complaint"
        component={CustomerComplaintScreen}
        options={{
          drawerLabel: "Customer Complaint",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}



function CustomerDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={CustomerDashboard}
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
    
    </Drawer.Navigator>
  );
}



// Main Stack Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Admin"
          component={AdminDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCollector"
          component={AddCollectorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditCollector"
          component={EditCollectorScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Customer Dashboard"
          component={CustomerDashboard}
          // options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Customer"
          component={CustomerDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
