
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
        <View style = {styles.buisnessContainer} >
            {/* image */}
            <View>
                <TouchableOpacity style={{height:140,width:140, borderRadius:70,left:10, backgroundColor:'#FF0A54', marginTop: 40,}} >
                <Image style={{height:132, width:132, borderRadius:66}} source={require("../assets/SnapLoveLogo.png")}></Image>
                </TouchableOpacity>
    
            </View>
            {/* text */}
            <View style={{marginLeft:30, marginTop: 50,}}>
                <Text style={styles.buisnessName}> {props.buisnessName} </Text>
                <Text style = {styles.buisnessType}> {props.buisnessType} </Text>
                <Text style = {styles.buisnessLocation}> {props.buisnessLocation} </Text>
                <Text > {props.buisnessWebsite} </Text>
                {/* style= {styles.buisnessWebsite} */}
            </View>
            {/* save button */}
            <View>
                <TouchableOpacity style = {styles.topRightButton}>
                    <Text style = {styles.topRightButtonText}>{props.topRightButton}</Text>
                </TouchableOpacity>
            </View>
        </View>
            <Text style = {styles.buisnessDetails} > {props.buisnessDetails}</Text>
        
        <View>
            
        </View>
        <View style = {styles.buttons}>
        
            <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress = {props.onPress}>
                    <Text>Invite Friends</Text>
                </TouchableOpacity>
            </View>
            <View style={{display:'flex', alignItems:'center'}}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                    <Text>Going?</Text>
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
        width: 120,
        borderRadius: 25,
        backgroundColor: '#C4C4C4',
        marginBottom: 10,
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

    // storiesButton: {
    //     // position: "absolute",
    //     width: 118.57,
    //     height: 120,
    //     left: 14,
    //     top: 15,
    //     backgroundColor: "transparent",
    //     borderRadius: 80,
    // },
    // iconButton: {
    //     // position: "absolute",
    //     width: 11.91,
    //     // height: 5.63,
    //     left: 255,

    //     fontFamily: "Roboto",
    //     fontStyle: "normal",
    //     fontWeight: "normal",
    //     fontSize: 4,
    //     lineHeight: 5,

    //     color: "#000000",

    // },

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
        top: 210,

        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 16,

        color: "#000000",
    },

    buisnessContainer: {
        position: "absolute",
        width: 414,
        height: 155,
        left: 0,
        top: 23,
        backgroundColor: "#C9E6FF",
        display:'flex',
        flexDirection:'row'
    },

    buisnessType: {
        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 11,
        color: "#A4A4A4",
        marginBottom:5,
    },

    buisnessName: {
        width: 233,
        // fontFamily: 'Arial', //NEED TO FIGURE OUT HOW TO LOAD FONTTTT !!!
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: 18,
        color: "#000000",
        marginBottom:5,
    },

    buisnessLocation: {
        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 14,
        color: "#000000",
        width: 160,
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

// import React, { useState, useEffect, useRef, Component } from "react";
// import RBSheet from "react-native-raw-bottom-sheet";
// import Colors from "../constants/Colors";
// import { StyleSheet, View, Text, Image, Modal, Button } from "react-native";
// import CircleIcon from '../components/CircleIcon';

// export default class InfoPage extends Component {
//     render() {
//         return
//         (
//             <View>
//             <View style={styles.resourcesContainer}>
//                 <Ionicons
//                     name={"menu-outline"}
//                     size={40}
//                     color={Colors.snapblue}
//                     style={{ marginTop: 5, marginLeft: 3 }}
//                     onPress={() => refRBSheet.current.open()}
//                 />
//             </View>
//             <RBSheet
//                 height={400}
//                 ref={refRBSheet}
//                 closeOnDragDown={true}
//                 closeOnPressMask={false}
//                 customStyles={{
//                 wrapper: {
//                     backgroundColor: "transparent"
//                 },
//                 draggableIcon: {
//                     backgroundColor: "#000"
//                 }
//                 }}
//             >
//                 <View>
//                 <Text style={{marginBottom: 20, marginLeft: 10, fontSize: 25}}>Find Resources</Text>
//                 <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
//                     <CircleIcon name='school-outline' text='scholarships'></CircleIcon>
//                     <CircleIcon name='home-outline' text='workshops'></CircleIcon>
//                     <CircleIcon name='search-outline' text='search'></CircleIcon>
//                 </View>
                
//                 </View>
                
//             </RBSheet>
//             </View>
//         );
//     }

// }

// const styles = StyleSheet.create({
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//     locateButtonContainer: {
//       position: "absolute",
//       bottom: 60,
//       right: 20,
//     },
//     locateButton: {
//       height: 50,
//       width: 50,
//       borderRadius: 25,
//       backgroundColor: colors.snapyellow,
//     },
//     submitButtomContainer: {
//       position: "absolute",
//       top: 20,
//       right: 20,
//       display: 'flex',
//       alignSelf: 'flex-end',
      
//     },
//     submitButton: {
//       height: 50,
//       width: 50,
//       borderRadius: 25,
//       backgroundColor: 'gray',
//       marginBottom: 10,
//     },
//     submitText: {
//       fontSize: 13,
//       top: 15,
//       display: 'flex',
//       alignSelf:'center',
      
//     },
//     resourcesContainer: {
//       width: width,
//       backgroundColor: "white",
//       display:'flex',
//       alignItems: 'center',
//       top: 676,
      
//     }
//   });