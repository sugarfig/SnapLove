import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import db from "../firebase";
import firebase from "@firebase/app";
import { ListItem, Avatar } from "react-native-elements";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [chatList, setChatList] = useState([]);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    // Download curr user info
    // (and listen for future updates)
    // (in case curr user decides to update their profile info)
    return db
      .collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((userSnapshot) => {
        setCurrUser({ uid: userSnapshot.id, ...userSnapshot.data() });
      });
  }, []);

  useEffect(() => {
    if (!currUser) return;
    // Download chats for user
    let chatsRef = db.collection("Chats");
    let query = chatsRef.where("users", "array-contains", currUser.uid);
    // Venus fix
    let unsubscribeFromNewSnapshots = query.onSnapshot((querySnapshot) => {
      let newChatList = [];
      querySnapshot.forEach((doc) => {
        let newChat = { ...doc.data() };
        newChat.id = doc.id;
        newChatList.push(newChat);
      });
      setChatList(newChatList);
    });

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, [currUser]);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <ChatItem
            onPress={() =>
              navigation.navigate("Chat", {
                chatName: item.id,
                currUser: currUser,
              })
            }
            text={item.id}
          />
        )}
      />
      <View style={styles.addButton}>
        <TouchableOpacity
          style={styles.Circle}
          onPress={() => navigation.navigate("Friends")}
        >
          <Ionicons
            name={"add-circle"}
            size={60}
            style={{ marginBottom: 8 }}
            color={Colors.snapblue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ChatItem(props) {
  return (
    <ListItem
      Component={TouchableOpacity}
      containerStyle={styles.chatItemContainer}
      disabledStyle={{ opacity: 0.5 }}
      onPress={props.onPress}
      pad={20}
    >
      <Avatar source={require("../assets/chat_placeholder.jpg")} />
      <ListItem.Content>
        <ListItem.Title>
          <Text>{props.text}</Text>
        </ListItem.Title>
        <ListItem.Subtitle style={styles.subtitle}>
          {/* Note: the dates are hardcoded! */}
          <Image
            style={styles.chatIcon}
            source={require("../assets/bluechat.png")}
          />
          <Text style={styles.chatDescription}>
            {" "}
            Tap to chat ⋅ {Math.floor(Math.random() * 5 + 1)}h{" "}
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  subtitle: {
    color: Colors.snapgray,
    fontSize: 14,
    flex: 1,
    flexDirection: "row",
    maxHeight: 20,
  },
  chatItemContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.lightgray,
    padding: 20,
  },
  chatIcon: {
    height: 10,
    width: 12,
  },
  chatDescription: {
    marginLeft: 3,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
