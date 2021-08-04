import {
    View,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
  } from "react-native";
  import { Text } from "react-native-elements";
  import CustomMultiPicker from "react-native-multiple-select-list";
  import * as React from "react";
  import { useState, useEffect } from "react";
  import Colors from "../constants/Colors";
  import db from "../firebase";
  import firebase from "@firebase/app";

export default function InviteFriendsScreen({navigation}) {
    const chatName = "Invitation";
    // const [chatName, setChatName] = useState("Invitation");
    const [userList, setUserList] = useState({});
    const [selectedUsers, setSelectedUsers] = useState([]);
  
    useEffect(() => {
      // Download all users info from Firebase "Users" collection
      // (and listen for future updates)
      // (in case someone joins the app in the mean time)
      // (or updates their display name)
      return db.collection("Users").onSnapshot((querySnapshot) => {
        let newUserList = {};
  
        querySnapshot.forEach((user) => {
          // Don't put current user in list
          if (user.id !== firebase.auth().currentUser.uid) {
            newUserList[user.id] = user.data().displayName;
          }
        });
  
        setUserList(newUserList);
      });
    }, []);
  
    const onPressCreateChat = () => {
      console.log("Create Chat button pressed!");
      console.log(selectedUsers);
      console.log(chatName);
      // Create new chat in Firebase
      let chatsRef = db.collection("Chats");
      chatsRef
        .doc(chatName)
        .get()
        .then((doc) => {
            chatsRef
              .doc(chatName)
              .set({
                messages: [{
                    _id: 1,
                    text: 'You have been invited!',
                    createdAt: new Date(),
                    user: {
                      _id: firebase.auth().currentUser.uid,
                      name: firebase.auth().currentUser.displayName,
                      avatar: "https://placeimg.com/140/140/any", //DOES NOT WORK WITH GETTING UPLOADED USER
                    },
                  }],
                users: [...selectedUsers, firebase.auth().currentUser.uid],
                lastUpdated: Date.now(),
              })
              .then(() => {
                console.log("Chat successfully created!");
                setSelectedUsers([]);
                navigation.navigate("Chats"); //changes screen to chat screen.
              })
              .catch((error) => {
                console.error("Error creating chat: ", error);
              });

        });
    };
  
    return (
      <View>
        <View style={styles.friendListContainer}>
          <CustomMultiPicker
            options={userList}
            search={true} // should show search bar?
            multiple={true} // allow multiple select
            placeholder={"To: "}
            placeholderTextColor={"#757575"}
            returnValue={"value"} // label or value
            callback={(selected) => {
              selected = selected.filter((user) => user !== undefined);
              setSelectedUsers(selected);
            }} // callback, array of selected items
            rowBackgroundColor={"white"}
            rowHeight={55}
            rowRadius={5}
            searchIconName="ios-checkmark"
            iconColor={Colors.snapblue}
            iconSize={30}
            selectedIconName={"ios-checkmark-circle-outline"}
            unselectedIconName={"ios-radio-button-off-outline"}
            scrollViewHeight={250}
          />
        </View>
        <KeyboardAvoidingView behavior="position">
          <TouchableOpacity
            style={
              chatName.length < 1 || selectedUsers.length < 1
                ? [styles.buttonContainer, styles.disabledButton]
                : [styles.buttonContainer, styles.button]
            }
            onPress={onPressCreateChat} //onPress calledd !
            disabled={chatName.length < 1 || selectedUsers.length < 1}
          >
            <Text style={styles.buttonText}>Invite friends!</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  const offset = 16;
  const styles = StyleSheet.create({
    friendListContainer: {
      padding: 10,
    },
    inputContainer: {
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      height: 45,
      margin: offset,
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1,
    },
    buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: offset,
      borderRadius: 8,
      backgroundColor: "transparent",
    },
    button: {
      backgroundColor: Colors.snapblue,
    },
    disabledButton: {
      backgroundColor: Colors.snapgray,
    },
    buttonText: {
      color: "white",
    },
  });
  