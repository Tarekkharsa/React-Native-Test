import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants";
import LoginSection from "../../sections/Form";
import ProductSection from "../../sections/product";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ height: "80%" }}>
        <LoginSection />
        <ProductSection />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
