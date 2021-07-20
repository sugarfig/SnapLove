import React, { useState, useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import db from "../firebase";

// should be using actual navigation types here, but haven't understood it yet
export default function HomeScreen({ navigation }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    let chatsRef = db.collection("Chats");
    chatsRef.get().then((querySnapshot) => {
      let newChatList = [];
      querySnapshot.forEach((doc) => {
        let newChat = { ...doc.data() };
        newChat.id = doc.id;
        newChatList.push(newChat);
        console.log(newChatList);
      });
      setChatList(newChatList);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat", { chatDoc: item })}
          >
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
