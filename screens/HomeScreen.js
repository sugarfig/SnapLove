import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import db from "../firebase";
import firebase from "@firebase/app";

export default function HomeScreen({ navigation }) {
  const [chatList, setChatList] = useState([]);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    // Download curr user info
    db.collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((userSnapshot) => {
        setCurrUser({ uid: userSnapshot.id, ...userSnapshot.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [firebase.auth().currentUser]);

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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chat", {
                chatName: item.id,
                currUser: currUser,
              })
            }
          >
            <Text style={styles.item}>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
