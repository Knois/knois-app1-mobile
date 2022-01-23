import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import style from "../styles/style";
import { SECONDARY, WHITE } from "../styles/constants";

import FooterBottomTabsItem from "./FooterBottomTabsItem";

const FooterBottomTabs = ({ state, navigation }) => {
  return (
    <>
      <View style={style.tabBarContainer}>
        <FooterBottomTabsItem navigation={navigation} stack="FeedStackScreen">
          <AntDesign
            name="home"
            size={35}
            color={state.index == 0 ? WHITE : SECONDARY}
          />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="FavoriteStackScreen"
        >
          <AntDesign
            name="hearto"
            size={35}
            color={state.index == 1 ? WHITE : SECONDARY}
          />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem navigation={navigation} stack="AddNoteScreen">
          <AntDesign name="plus" size={35} color="white" />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="MyNotesStackScreen"
        >
          <AntDesign
            name="book"
            size={35}
            color={state.index == 2 ? WHITE : SECONDARY}
          />
        </FooterBottomTabsItem>
        <FooterBottomTabsItem
          navigation={navigation}
          stack="ProfileStackScreen"
        >
          <AntDesign
            name="user"
            size={35}
            color={state.index == 3 ? WHITE : SECONDARY}
          />
        </FooterBottomTabsItem>
      </View>
    </>
  );
};

export default FooterBottomTabs;
