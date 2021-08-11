import * as React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



function BitmojiMarker(props){
    return(
        <Marker coordinate={props.location}>
            <Image source={props.source}  style={{width: 125, height: 125}}></Image>
          
        </Marker>
    )
}
const styles = StyleSheet.create({


  
})


export default BitmojiMarker;