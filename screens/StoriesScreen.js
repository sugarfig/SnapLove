import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function StoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Stories.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.Circle}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Ionicons
              name={"person-circle-outline"}
              size={40}
              style={{ marginTop: 8, marginLeft: 16 }}
              color={Colors.snapblue}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
