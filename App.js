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
import Pickups from "./screens/CollectorScreens/PicksUps";
import { ComplaintProvider } from "./context/ComplaintContext";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import EditCollectorScreen from "./screens/AdminScreens/EditCollectorScreen";
import CustomerComplaintScreen from "./screens/AdminScreens/CustomerComplaintScreen";
import CustomerDashboard from "./screens/CustomerScreens/CustomerDashboard";
import CollectorDashboard from "./screens/CollectorScreens/CollectorDashboard";
import LodgeComplaintScreen from "./screens/CustomerScreens/LodgeComplaintScreen";
import GarbageCollectionScreen from "./screens/CustomerScreens/GarbageCollectionScreen";
import Loader from "./screens/Loader";
import CollectorNotifications from "./screens/CollectorScreens/CollectorNotifications";
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
            uri: "https://wallpaperaccess.com/full/2562964.jpg",
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

function CollectorDrawer() {
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
        component={CollectorDashboard}
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pick ups"
        component={Pickups}
        options={{
          drawerLabel: "Pick ups",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={CollectorNotifications}
        options={{
          drawerLabel: "Notifications",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons name="notifications" size={24} color="#FFD700" style={{
              marginRight:15
            }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}



function CustomerDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={CustomerDashboard}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="Profile"
        component={CustomerDashboard}
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      /> */}

      <Drawer.Screen
        name="Complaint"
        component={GarbageCollectionScreen}
        options={{
          drawerLabel: "Complaint",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}



// Main Stack Navigation
export default function App() {
  return (
    <ComplaintProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Loader"
            component={Loader}
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
          <Stack.Screen
            name="LodgeComplaint"
            component={LodgeComplaintScreen}
          />
          <Stack.Screen
            name="Collector"
            component={CollectorDrawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ComplaintProvider>
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
