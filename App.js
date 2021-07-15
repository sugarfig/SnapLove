import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import db from "./firebase";
import firebase from "firebase/app";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("Chats")
      .doc("myfirstchat")
      .get()
      .then((snapshot) => {
        console.log(snapshot.id);
        console.log(snapshot.data());
        setMessages(snapshot.data().messages);
      });
  }, []);

  const onSend = useCallback((messages = []) => {
    db.collection("Chats")
      .doc("myfirstchat")
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
      user={{
        // current "blue bubble" user
        _id: "1",
        name: "Ashwin",
        avatar: "https://placeimg.com/140/140/any",
      }}
      inverted={true}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
    />
  );
}
