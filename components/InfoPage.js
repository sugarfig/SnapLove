
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {Pressable,View, Button, StyleSheet, Dimensions, Text, Modal, Image, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CircleIcon from '../components/CircleIcon';
import { LinearGradient } from 'expo-linear-gradient';
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { Ionicons } from "@expo/vector-icons";

var width = Dimensions.get('window').width;
function InfoPage(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const refRBSheet = useRef();

  return (
    <View>
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
                <TouchableOpacity style={styles.goingChoice}>
                    <Ionicons
                    name={"happy-outline"}
                    size={30}
                    color={'gray'}
                    style={{marginRight:10}}
                    
                    />
                    <Text>Yes, I'm there!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.goingChoice}>
                    <Ionicons
                    name={"bookmark-outline"}
                    size={30}
                    color={'gray'}
                    style={{marginRight:10}}
                    
                    />
                    <Text>Save for later</Text>
                </TouchableOpacity>

                <Text style={styles.modalText}></Text>
                <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Done</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <LinearGradient
            colors={['#C0FDFF', '#C8E7FF', 'rgba(222, 170, 255, 0.73)','rgba(255, 10, 84, 0.49)',, ]}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: 160, marginTop:10,}}
            >      
        </LinearGradient>
        <View style = {styles.buisnessContainer} >
            {/* image */}
            <View>
                <TouchableOpacity style={{height:140,width:140, borderRadius:70,left:10, backgroundColor:'#FF0A54', marginTop: 40,}} >
                <Image style={{height:132, width:132, borderRadius:66}} source={require("../assets/SnapLoveLogo.png")}></Image>
                </TouchableOpacity>
    
            </View>
            {/* text */}
            <View style={{marginLeft:30,top:105,}}>
                <Text style={styles.buisnessName}> {props.buisnessName} </Text>
                <Text style = {styles.buisnessType}> {props.buisnessType} </Text>
                
                {/* style= {styles.buisnessWebsite} */}
            </View>
            {/* save button */}
            <View>
                <TouchableOpacity style = {styles.topRightButton}>
                    <Text style = {styles.topRightButtonText}>{props.topRightButton}</Text>
                </TouchableOpacity>
            </View>
        </View>
            <View style={{display:'flex',flexDirection:'row',marginLeft:130, marginTop:10,}}>
                <Ionicons color={'#D0D4D7'} name={'location-outline'} size={15}/>
                <Text style = {styles.buisnessLocation}> {props.buisnessLocation} </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginLeft:100, marginTop:10, justifyContent:'space-around'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Ionicons color={'#D0D4D7'} name={'call-outline'} size={15}></Ionicons>
                    <Text style={{color:'#11ADFF',marginLeft:5}}>{props.phone} </Text>
                </View>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <Ionicons color={'#D0D4D7'} name={'globe-outline'} size={15}></Ionicons>
                    <Text style={{color:'#11ADFF',marginLeft:5}}>{props.buisnessWebsite} </Text>
                </View>
                
                
            </View>
            
           
            <Text style = {styles.buisnessDetails} > {props.buisnessDetails}</Text>
            
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',top:110}}>
        
            <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress = {props.onPress}>
                    <Text style={{fontWeight:'bold'}}>Invite Friends</Text>
                </TouchableOpacity>
            </View>
            <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.goingButton}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Going?</Text>
                </TouchableOpacity>
            </View>

        </View>
        
            
    </View>
  );
}

const styles = StyleSheet.create({
    goingChoice:{
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center',
        height: 50,
        width:300,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    button:{
        height: 48,
        width: 140,
        borderRadius: 25,
        backgroundColor: '#D0D4D7',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    goingButton:{
        height: 48,
        width: 140,
        borderRadius: 25,
        backgroundColor: '#11ADFF',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    storiesImage: {
        width: 118.57,
        height: 120,
        left: 12,
        top: 3,
        borderRadius: 80,
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
      buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "gray",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

    topRightButtonText: {
        fontSize: 13,
        display: 'flex',
        alignSelf:'center',
        alignItems:'center',
        marginTop:12,
        
    },

    topRightButton: {
        // position: "absolute",
        width: 45,
        height: 48,
        marginTop: 15,
        // left: 335,
        // top: 20,
        marginLeft: -50,
        backgroundColor: "#9C9797",
        borderRadius: 34,
    },

    buttons: {
        height: 48,
        top: 289,
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-around',
    },

    buisnessDetails: {
        position: "absolute",
        width: 349,
        left: 34,
        top: 250,

        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 16,

        color: "#000000",
    },

    buisnessContainer: {
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        marginTop:10,

    },

    buisnessType: {
        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 11,
        
        marginBottom:5,
    },

    buisnessName: {
        width: 233,
        // fontFamily: 'Arial', //NEED TO FIGURE OUT HOW TO LOAD FONTTTT !!!
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: 23,
        color: "#000000",
        marginBottom:5,
    },

    buisnessLocation: {
        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 12,
        color: "#000000",
        marginBottom:5,
       
    },

    buisnessWebsite: {
        position: "absolute",
        width: 97,
        height: 27,
        left: 151,
        top: 140,

        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 11,
        lineHeight: 15,

        color: "#000000",
    },

    resourcesContainer: {
        width: 50,
        backgroundColor: "white",
        display:'flex',
        alignItems: 'center',
        top: 676,
        
    }
});

export default InfoPage;
