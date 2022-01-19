import React from "react";
import { View, Text } from "react-native";
import style from "../styles/style";
import { EvilIcons } from "@expo/vector-icons";
import { format } from "date-fns";

const UpdatedAt = ({ updatedAt }) => {
  return (
    <View style={style.updatedAtContainer}>
      <EvilIcons
        name="clock"
        size={24}
        color="black"
        style={{ paddingHorizontal: 10 }}
      />

      <View>
        <Text style={{ fontSize: 8 }}>Last update: </Text>

        <Text style={{ fontSize: 8 }}>
          {format(new Date(updatedAt), "MMM do yyyy")}
        </Text>
      </View>
    </View>
  );
};

export default UpdatedAt;
