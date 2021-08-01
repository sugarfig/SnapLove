import * as React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";


const icon = require("../assets/icon.png");
function Pin(props){
    return(
        <Marker
        coordinate={props.location}
        title={"Current Location"}
        description={"You are here!"}
      >
          <TouchableOpacity>
            <Image source={icon}
            style={{width: 50, height: 50}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      </Marker>
    )
}
export default Pin;