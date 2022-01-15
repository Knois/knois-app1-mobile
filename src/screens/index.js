import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedStackScreen from "./stacks/FeedStackScreen";
import MyNotesStackScreen from "./stacks/MyNotesStackScreen";
import FavoriteStackScreen from "./stacks/FavoriteStackScreen";
import ProfileStackScreen from "./stacks/ProfileStackScreen";
import MyTabBar from "../components/TabBar/MyTabBar";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="FeedStack" component={FeedStackScreen} />
        <Tab.Screen name="MyNotesStack" component={MyNotesStackScreen} />
        <Tab.Screen name="FavoritesStack" component={FavoriteStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
