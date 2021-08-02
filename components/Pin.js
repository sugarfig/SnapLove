import * as React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";



function Pin(props){
    return(
        <Marker
        coordinate={props.location}
        title={"Current Location"}
        description={"You are here!"}
      >
          <TouchableOpacity>
            <Image source={props.icon}
            style={{width: 80, height: 80}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      </Marker>
    )
}
export default Pin;