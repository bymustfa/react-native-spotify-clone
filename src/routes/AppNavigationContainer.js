import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";

import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import YourLibraryView from "../views/YourLibraryView";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen deneme="deneme yazısı" name="Home" component={HomeView} />
    <Tab.Screen name="Search" component={SearchView} />
    <Tab.Screen name="Your Library" component={YourLibraryView} />
  </Tab.Navigator>
);

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
