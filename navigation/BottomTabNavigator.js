import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FriendsScreen from "../screens/FriendsScreen";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Chats";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
        showLabel: true,
        style: {
          backgroundColor: "black",
        },
      }}
    >
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: "Your Friends",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="logo-snapchat" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: "Your Chats",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="chatbox-ellipses-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Your Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="person-circle-outline" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Chats":
      return "Chats";
    case "Chat":
      return "Chat";
    case "Profile":
      return "Profile";
    case "Friends":
      return "Friends";
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "black",
  },
});
