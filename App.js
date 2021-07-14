import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 5, // message IDs
        text: "wahoo!!!",
        createdAt: new Date(),
        user: {
          _id: 2, // user IDs
          name: "Jenny",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 4, // message IDs
        text: "yes!!!",
        createdAt: new Date(),
        user: {
          _id: 1, // user IDs
          name: "Ashwin",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 3, // message IDs
        text: "right?",
        createdAt: new Date(),
        user: {
          _id: 2, // user IDs
          name: "Jenny",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Teaching SEA is so fun!!!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Jenny",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 1,
        text: "Hello there!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Jenny",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
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
        _id: 1,
        name: "Ashwin",
        avatar: "https://placeimg.com/140/140/any",
      }}
      inverted={true}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
    />
  );
}
