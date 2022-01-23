import React, { useState } from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import style from "../styles/style";
import { SECONDARY, SECONDARY_DARK, WHITE } from "../styles/constants";

import FooterBottomTabsItem from "./FooterBottomTabsItem";

const FooterBottomTabs = ({ navigation }) => {
  const [focusedScreen, setFocusedScreen] = useState("FeedStackScreen");

  return (
    <>
      <View style={style.tabBarContainer}>
        <FooterBottomTabsItem navigation={navigation} stack="FeedStackScreen">
          <AntDesign name="home" size={24} color="red" />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="FavoriteStackScreen"
        >
          <AntDesign name="hearto" size={24} color="green" />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem navigation={navigation} stack="AddNoteScreen">
          <AntDesign name="plussquareo" size={24} color="black" />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="MyNotesStackScreen"
        >
          <AntDesign name="book" size={24} color="black" />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="ProfileStackScreen"
        >
          <AntDesign name="user" size={24} color="black" />
        </FooterBottomTabsItem>
      </View>
    </>
  );
};

export default FooterBottomTabs;
