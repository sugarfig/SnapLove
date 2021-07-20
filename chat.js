import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import FirebaseSDK from "./firebaseSDK";

const db = firebase.firestore();

// should be using actual navigation types here, but haven't understood it yet
function HomeScreen({ navigation }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    let chatsRef = db.collection("chats");
    chatsRef.get().then((querySnapshot) => {
      let newChatList = [];
      querySnapshot.forEach((doc) => {
        let newChat = { ...doc.data() };
        newChat.key = doc.id;
        newChatList.push(newChat);
      });
      setChatList(newChatList);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Chat", { chatDoc: item })}
          >
            <Text>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ChatScreen({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [chatDoc, setChatDoc] = useState(route.params.chatDoc);

  // Run once when mounting component
  useEffect(() => {
    // returns the unsubscribe function which useEffect calls when it unmounts
    return db
      .collection("chats")
      .doc(chatDoc.key)
      .onSnapshot((doc) => {
        setChatDoc({ key: chatDoc.key, ...doc.data() });
      });
  }, []);

  // Run every time chat doc is updated
  useEffect(() => {
    setMessages(
      chatDoc.messages
        .map((m) => {
          m.createdAt = m.createdAt.seconds * 1000;
          return m;
        })
        .reverse()
    );
  }, [chatDoc]);

  const onSend = useCallback((messages = []) => {
    if (messages.length < 1) return;
    db.collection("chats")
      .doc(chatDoc.key)
      .update({
        // arrayUnion appends the message to the existing array
        messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
      });
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderUsernameOnMessage={true}
      user={{
        _id: 1,
      }}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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

export default App;
