import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import WishListIcon from "../assets/icons/Path 3080.svg";
import { useCount } from "../context/cart-context";

const LoginSection = () => {
  const { state, dispatch } = useCount();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.carImageContainer}>
          <Image
            style={styles.carImage}
            source={require("../assets/car.png")}
          />
        </View>
        <View style={styles.cardTop}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text>400</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <WishListIcon width={25} height={25} />
              <Icon name={"share-google"} size={35} color={"#464646"} />
            </View>
            <View
              style={{
                marginHorizontal: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "right",
                  color: "#102654",
                }}
              >
                get a chance to WIN A
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#102654",
                  marginEnd: 15,
                }}
              >
                Bentley Continental
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <Image
              source={require("../assets/blue-hoodie-png.png")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.title}>Buy a blue cotton hoodie</Text>
            <Text style={styles.price}>AED 100</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                onPress={() => dispatch({ type: "decrement" })}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{state.count}</Text>
              <TouchableOpacity
                onPress={() => dispatch({ type: "increment" })}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    height: "71%",
    borderRadius: 20,
    borderColor: "#d5d5d5",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#f7f5f8",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
  },
  cardTop: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardBottom: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: "#dbdbdb",
    borderTopWidth: 1,
    zIndex: -1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  carImage: {
    resizeMode: "cover",
    zIndex: 1,
    width: 309,
    height: 154,
  },
  carImageContainer: {
    position: "absolute",
    top: 58,
    right: -120,
    width: 346,
    height: 209,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e03a3f",
    borderRadius: 100,
    marginHorizontal: 5,
  },
  actionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 24,
    fontStyle: "normal",
    textAlign: "center",
    color: "#686869",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    fontStyle: "normal",
    textAlign: "center",
    color: "#102654",
    marginBottom: 8,
  },
});

export default LoginSection;
