import firebase from "@firebase/app";
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Modal,
  TextInput,
} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import * as ImagePicker from "expo-image-picker";
import db from "../firebase";

export default function ProfileScreen() {
  const [currUser, setCurrUser] = useState(null);

  const { showActionSheetWithOptions } = useActionSheet();
  const [imageURI, setImageURI] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");


  const [displayPronoun, setDisplayPronoun] = useState("pronouns");
  const [pronounModalVisible,setPronounModalVisble] = useState(false);


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
    setImageURI(currUser.photoURL);
    setDisplayName(currUser.displayName);
  }, [currUser]);

  const onPressLogout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Signed out!");
        setCurrUser(null);
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  const onEditAvatar = () => {
    showActionSheetWithOptions(
      {
        options: ["Camera", "Image Library", "Cancel"],
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex == 0) {
          handleCamera();
        } else if (buttonIndex == 1) {
          handleLibrary();
        }
        console.log(buttonIndex);
      }
    );
  };

  const handleCamera = async () => {
    if (Platform.OS !== "web") {
      let permissions = await ImagePicker.getCameraPermissionsAsync();
      if (!permissions.granted) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.cancelled) {
      console.log(result);
      setImageURI(result.uri);
      uploadAndUpdateAvatar(result.uri);
    }
  };

  const handleLibrary = async () => {
    if (Platform.OS !== "web") {
      let permissions = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!permissions.granted) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need media library to make this work!");
        }
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.cancelled) {
      console.log(result);
      setImageURI(result.uri);
      uploadAndUpdateAvatar(result.uri);
    }
  };

  const uploadAndUpdateAvatar = async (imageURI) => {
    try {
      const filename = imageURI.substring(imageURI.lastIndexOf("/") + 1);
      const response = await fetch(imageURI);
      const blob = await response.blob();

      const uploadTask = firebase
        .storage()
        .ref(currUser.uid + "/" + filename) // unique path
        .put(blob);
      // set progress state
      uploadTask.on("state_changed", (snapshot) => {
        // Can keep track of upload progress here
        // setTransferred(
        //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        // );
      });

      await uploadTask;
      let downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
      console.log(downloadURL);
      await db
        .collection("Users")
        .doc(currUser.uid)
        .set(
          {
            photoURL: downloadURL,
          },
          { merge: true }
        )
        .then(() => {
          console.log("Updated photo URL!");
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      {currUser ? (
        <>
          <View style={styles.headerColumn}>

            <TouchableOpacity onPress={onEditAvatar}>
              <Image style={styles.userImage} source={{ uri: imageURI }} />
            </TouchableOpacity>

            <View style={styles.Row}>
              <Text style={styles.userNameText}>{displayName}</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons
                  name={"create-outline"}
                  size={25}
                  style={{ marginBottom: 8, marginLeft: 3 }}
                  color={Colors.snapgray}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.Row}>
              <Text style={styles.descriptionText}>{displayPronoun}</Text>
              <TouchableOpacity onPress={() => setPronounModalVisble(true)}>
                <Ionicons
                  name={"create-outline"}
                  size={25}
                  style={{ marginBottom: 8, marginLeft: 3 }}
                  color={Colors.snapgray}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Row}>
              <Text style={styles.descriptionText}>{currUser.email}</Text>
            </View>
          </View>
          <View style={styles.Row}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.logoutButton]}
              onPress={onPressLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <EditModal
            setDisplayName={setDisplayName}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            currUser={currUser}
          ></EditModal>
          <EditPronounModal
          setDisplayPronoun={setDisplayPronoun}
          setPronounModalVisible={setPronounModalVisble}
          pronounModalVisible={pronounModalVisible}
          ></EditPronounModal>
        </>
      ) : (
        <View></View>
      )}
    </View>
  );
}

function EditPronounModal(props) {
  const [newPronoun, setPronoun] = useState("");

  const onPressSaveNewName = async () => {
    props.setPronounModalVisible(!props.pronounModalVisible);
    props.setDisplayPronoun(newPronoun);

  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.pronounModalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pronouns:</Text>
          <TextInput autoFocus={true} onChangeText={setPronoun}/>

          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={onPressSaveNewName}
          >
            <Text style={styles.textStyle}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.setPronounModalVisible(!props.pronounModalVisible);
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function EditModal(props) {
  const [newName, setNewName] = useState("");

  const onPressSaveNewName = async () => {
    props.setModalVisible(!props.modalVisible);
    props.setDisplayName(newName);

    await db
      .collection("Users")
      .doc(props.currUser.uid)
      .set(
        {
          displayName: newName,
        },
        { merge: true }
      )
      .then(() => {
        console.log("Updated display name!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Change your name:</Text>
          <TextInput autoFocus={true} onChangeText={setNewName} />

          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={onPressSaveNewName}
          >
            <Text style={styles.textStyle}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerColumn: {
    backgroundColor: "transparent",
    paddingBottom: 20,
    paddingTop: 45,
    justifyContent: "center",
  },
  Row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  descriptionText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: Colors.tintColor,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  logoutButton: {
    backgroundColor: Colors.snapblue,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    marginTop: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    margin: 20,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
