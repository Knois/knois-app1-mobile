import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStackScreen from "./stacks/FeedStackScreen";
import MyNotesStackScreen from "./stacks/MyNotesStackScreen";
import FavoriteStackScreen from "./stacks/FavoriteStackScreen";
import ProfileStackScreen from "./stacks/ProfileStackScreen";
import FooterBottomTabs from "../components/FooterBottomTabs";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <FooterBottomTabs {...props} />}
    >
      <Tab.Screen name="FeedStackScreen" component={FeedStackScreen} />
      <Tab.Screen name="FavoriteStackScreen" component={FavoriteStackScreen} />
      <Tab.Screen name="MyNotesStackScreen" component={MyNotesStackScreen} />
      <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
