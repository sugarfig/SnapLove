import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import db from "../firebase";
import { firebase } from "@firebase/app";

export default function ChatScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const [chatDoc, setChatDoc] = useState(route.params.chatDoc);

  // Run once when mounting component
  useEffect(() => {
    // returns the unsubscribe function which useEffect calls when it unmounts
    return db
      .collection("Chats")
      .doc(chatDoc.id)
      .onSnapshot((doc) => {
        setChatDoc({ id: chatDoc.id, ...doc.data() });
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
    let newMessage = messages[0];
    db.collection("Chats")
      .doc(chatDoc.id)
      .update({
        // arrayUnion appends the message to the existing array
        messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
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
        name: "Sam",
      }}
    />
  );
}
