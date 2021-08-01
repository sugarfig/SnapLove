

import React, { useState, useEffect, useRef } from "react";
import { View, Button, StyleSheet, Dimensions, Text, Modal, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import CircleIcon from '../components/CircleIcon'
 
export default function Example() {
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
            <View>
                <Text style={{marginBottom: 20, marginLeft: 10, fontSize: 25}}>Find Resources</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <CircleIcon name='school-outline' text='scholarships'></CircleIcon>
                    <CircleIcon name='home-outline' text='workshops'></CircleIcon>
                    <CircleIcon name='search-outline' text='search'></CircleIcon>
                </View>
            </View>
        </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
    resourcesContainer: {
        width: 50,
        backgroundColor: "white",
        display:'flex',
        alignItems: 'center',
        top: 676,
        
    }
});


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