

import React, { useState, useEffect, useRef } from "react";
import { View, Button, StyleSheet, Dimensions, Text, Modal, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CircleIcon from '../components/CircleIcon'
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Ionicons } from "@expo/vector-icons";
 
function InfoPage(props) {
  const refRBSheet = useRef();
  return (
    <View>
        <View style={styles.resoursesContainer}>
            <Ionicons
            name={"menu-outline"}
            size={40}
            color={Colors.snapblue}
            style={{ marginTop: 5, marginLeft: 3 }}
            onPress={() => refRBSheet.current.open()}
            />
        </View>
        <RBSheet
            height={400}
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            draggableIcon: {
                backgroundColor: "#000"
            }
            }}
        >
            <View >
                <View style = {styles.buisnessContainer}>


                    <Text style = {styles.buisnessName}> {props.buisnessName} </Text>
                    <Text style = {styles.buisnessType}> {props.buisnessType} </Text>



                    <View>

                        
                        <Text style = {styles.buisnessLocation}> {props.buisnessLocation} </Text>
                        <Text style= {styles.buisnessWebsite}> {props.buisnessWebsite} </Text>

                        {/* <TouchableOpacity style = {styles.iconButton}>
                            <Ionicons name = {props.iconName}></Ionicons>
                        </TouchableOpacity> */}



                    </View>
                    <View>

                        <TouchableOpacity style = {styles.topRightButton}>
                            <Text style = {styles.topRightButtonText}>{props.topRightButton}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style = {styles.storiesImage} source = {require("../assets/avatar.png")}/> 
                            {/* FIND A WAY TO GET ANY IMAGE TO SHOW */}
                            {/* <Text style = {styles.topRightButtonText}>Image of Location</Text> */}
                        </TouchableOpacity>
                    </View>



                    {/* <Text style={{marginBottom: 20, marginLeft: 10, fontSize: 25}}>Find Resources</Text> */}
                </View>

                <View>
                    <Text style = {styles.buisnessDetails}> {props.buisnessDetails}</Text>
                </View>

                <View style = {styles.buttons}>
                    <CircleIcon text = {props.button1}></CircleIcon>
                    <CircleIcon text = {props.button2}></CircleIcon>
                    <CircleIcon text= {props.button3}></CircleIcon>
                </View>
                
                    
                {/* </View> */}
         
                {/* <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <CircleIcon name='school-outline' text='scholarships'></CircleIcon>
                    <CircleIcon name='home-outline' text='workshops'></CircleIcon>
                    <CircleIcon name='search-outline' text='search'></CircleIcon>
                </View> */}
            </View>
        </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({

    storiesImage: {
        width: 118.57,
        height: 120,
        left: 12,
        top: 3,
        borderRadius: 80,
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
        top: 15,
        display: 'flex',
        alignSelf:'center',
        
    },

    topRightButton: {
        // position: "absolute",
        width: 45,
        height: 48,
        left: 335,
        top: 20,

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
        height: 52,
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
        backgroundColor: "#F2ECEC",
    },

    buisnessType: {
        position: "absolute",
        width: 68,
        height: 14,
        left: 151,
        top: 99,

        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 11,
        lineHeight: 15,

        color: "#A4A4A4",
    },

    buisnessName: {
        position: "absolute",
        width: 233,
        height: 32,
        left: 150,
        top: 75,

        // fontFamily: 'Arial', //NEED TO FIGURE OUT HOW TO LOAD FONTTTT !!!
        fontStyle: "normal",
        fontWeight: '900',
        fontSize: 18,
        lineHeight: 30,

        color: "#000000",
    },

    buisnessLocation: {
        position: "absolute",
        width: 166,
        height: 61,
        left: 151,
        top: 115,
        
        // fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19,
        
        color: "#000000",
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