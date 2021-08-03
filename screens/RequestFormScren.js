import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Alert,
  Pressable,
  Image  
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";



var width = Dimensions.get('window').width; //full width
export default function RequestFormScreen({navigation}) {
const [name, onChangeName] = useState(null);
const [modalVisible, setModalVisible] = useState(false);

function changeToEditCategory(){
  navigation.navigate("EditCategory")
}
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.headerModal}>Recieved</Text>
            <Image></Image>
            <Text>We got your suggestion!</Text>
            <Text style={{textAlign:'center',width: 200}}>Give us 72 hours to check out and put it on SnapLOVE layer.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
            <Text style={{color:'#424953',fontWeight:'bold'}}>SnapLOVE Guidlines</Text>
          </View>
        </View>
      </Modal>
        <Text style={{textAlign: 'center', marginTop: 20, fontSize:18, fontWeight:'bold'}}>Suggest a Place</Text>
        <View >
            <Text>Catergory</Text>
            <TouchableOpacity style={styles.categoryButton} onPress={changeToEditCategory}>
                <Text>Tap to add a Catergory</Text>
                <Ionicons
                  name={"chevron-forward-outline"}
                  size={40}
                  color={'#C4C4C4'}        
            />
            </TouchableOpacity>
        </View>
        <View>
            <Text>Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Enter Name"
        />
        </View>
        
        <View>
            <Text>Address</Text>
            <TextInput
            style={styles.input}
            placeholder="Street and number, P.O box, c/o"
        />
            <TextInput
            style={styles.input}
            placeholder="Apartment, suite, unit, building, floor, etc."
        />
            <TextInput
            style={styles.input}
            placeholder="Ciy"
        />
            <TextInput
            style={styles.input}
            placeholder="State/Province/Region"
        />
            <TextInput
            style={styles.input}
            placeholder="Zip Code"
        />
            <TextInput
            style={styles.input}
            placeholder="Country"
        />
        <View>
            <Text>Phone Number</Text>
            <TextInput
            style={styles.input}
            placeholder="+1(213)123-4567"
            keyboardType="numeric"
        />
        </View>
        <View style={{display:'flex',alignItems:'center',marginTop:10}}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>


        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
   
  },
  text: {
    fontSize: 50,
  },
  input: {
    backgroundColor:'white',
    height: 40,
    margin:8,
    borderWidth: 1,
    padding: 10,
    borderColor: "#EAEAEA",
    borderRadius: 12,
  },
  categoryButton:{
    margin: 12,
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height: 60,
    borderColor:'black',
    width: width-30, 
    borderRadius: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    backgroundColor:'#FFFFFF',
  },
  submitButton: {
      height:50,
      width:150,
      backgroundColor:'#11ADFF',
      borderRadius:30,
  },
  submitButtonText:{
      textAlign:'center', 
      margin:14,
      color:'white',
      fontSize: 20,
      fontWeight: 'bold'
     },
     centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#424953",
      marginTop:10,
      marginBottom: 10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    headerModal:{
      marginBottom: 15,
      textAlign: "center",
      fontWeight:'bold',
      fontSize:18,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    }
});
