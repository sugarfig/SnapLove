import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function StoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/Stories.png")}
          style={styles.scrollImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  scrollImage: {
    resizeMode: "contain",
    width: "100%",
    overflow: "visible",
  },
});
