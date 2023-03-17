import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CartIcon from "../assets/icons/Icon Cart Inact.svg";
import HomeIcon from "../assets/icons/Icon Prizes Ina.svg";
import WishListIcon from "../assets/icons/Path 3080.svg";
import TicketIcon from "../assets/icons/ticket.svg";
import CustomTabBar from "../components/CustomTabBar";
import CustomTabBarButton from "../components/CustomTabBarButton";
import { COLORS, ROUTES } from "../constants";
import { Cart, Home, Profile, Tickets, WishList } from "../screens";
import { useCount } from "../context/cart-context";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { state } = useCount();
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === ROUTES.HOME) {
            return <HomeIcon width={25} height={25} color={color} />;
          } else if (route.name === ROUTES.WishList) {
            return <WishListIcon width={25} height={25} color={color} />;
          } else if (route.name === ROUTES.Tickets) {
            return <TicketIcon width={25} height={25} color={color} />;
          } else if (route.name === ROUTES.PROFILE) {
            return <Icon name={"ios-person-outline"} size={22} />;
          }

          return (
            <View
              style={{
                position: "relative",
              }}
            >
              {state.count > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -18,
                    width: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#e03a3f",
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    {state.count}
                  </Text>
                </View>
              )}
              <CartIcon width={25} height={25} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route="home" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Tickets}
        component={Tickets}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Cart}
        component={Cart}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.WishList}
        component={WishList}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.background,
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 92,
  },
});
