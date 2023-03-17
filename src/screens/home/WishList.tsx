import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const WishList = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Notification!</Text>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({});
