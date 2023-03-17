import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Tickets = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Tickets!</Text>
    </View>
  );
};

export default Tickets;
