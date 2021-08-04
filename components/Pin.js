import * as React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



function Pin(props){
    return(
        <Marker
        coordinate={props.location}
        title={"Current Location"}
        description={"You are here!"}
        onPress={() => {
          props.refRBSheet.current.open();
          props.setCurrOrg(props.title);
        }}
      >
           <LinearGradient
            colors={['rgba(255, 10, 84, 0.49)', 'rgba(222, 170, 255, 0.73)', '#C8E7FF', '#C0FDFF']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: 70, width:70, alignItems: 'center', justifyContent: 'center', borderRadius:35, marginLeft: '5%', marginRight: '5%'}}
            >
               <TouchableOpacity onPress={props.onPress} style={styles.pinContainer}>
                  <Image  source={props.icon}
                  style={{width: 60, height: 60}}
                  resizeMode="contain"></Image>
                </TouchableOpacity>
            </LinearGradient>
          
      </Marker>
    )
}
const styles = StyleSheet.create({
  
  pinContainer: {
    height:60,
    width:60,
    borderRadius:50,
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

  
})


export default Pin;