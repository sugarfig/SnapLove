import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, Modal } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/Colors";
import RBSheet from "react-native-raw-bottom-sheet";
import { Dimensions } from "react-native";
import CircleIcon from '../components/CircleIcon'
import InfoPage from "../components/InfoPage";


const bitmoji = require("../assets/bitmoji.png");
var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height
const LOS_ANGELES_REGION = {
  latitude: 34.0522,
  longitude: -118.2437,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapScreen() {
  const [snapLove, setSnapLove] = useState(false);
  const refRBSheet = useRef();
  const [currLocation, setCurrLocation] = useState(null);
  const mapView = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrLocation(location.coords);
    })();
  }, []);

  const goToCurrLocation = () => {
    mapView?.current.animateToRegion(
      {
        latitude: currLocation.latitude,
        longitude: currLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };

  const turnOnSnapLove = () =>{
    setSnapLove(true);
    console.log(currLocation)

  }

  return (
    <>
      <MapView
        ref={mapView}
        style={styles.map}
        initialRegion={LOS_ANGELES_REGION}
      >
        {currLocation ? (
          <Marker
            coordinate={currLocation}
            title={"Current Location"}
            description={"You are here!"}
          ><Image source={bitmoji}
            style={{width: 125, height: 125}}
            resizeMode="contain"></Image>
          </Marker>
        ) : null}
      </MapView>
      {currLocation ? (
        <View style={styles.locateButtonContainer}>
          <TouchableOpacity
            style={styles.locateButton}
            onPress={goToCurrLocation}
          >
            <Ionicons
              name={"navigate"}
              size={40}
              color={Colors.snapblue}
              style={{ marginTop: 5, marginLeft: 3 }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      {currLocation ? (
        <View style={styles.submitButtomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
          >
            <Text style={styles.submitText}>suggest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={turnOnSnapLove}
          >
            <Text style={styles.submitText}>Snap Love</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {currLocation ? (
        <View>
          <InfoPage 
          buisnessName = {"Please work"} 
          buisnessType = {"Workshop"} 
          buisnessLocation = {"1235 Lanston Blvd, Los Angeles, CA 90321"} 
          buisnessWebsite = {"mirrormemoirs.org"}
          buisnessDetails = {"This workshop incorporates various practitioners, scholars, and organizers from different backgrounds who have dedicated to disability and transformative justice movements for many years."}
          />
          {/* <View style={styles.resourcesContainer}>
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
            
          </RBSheet> */}
         </View>
      ) : null}


    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locateButtonContainer: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  locateButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.snapyellow,
  },
  submitButtomContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    display: 'flex',
    alignSelf: 'flex-end',
    
  },
  submitButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  submitText: {
    fontSize: 13,
    top: 15,
    display: 'flex',
    alignSelf:'center',
    
  },
  resourcesContainer: {
    width: width,
    backgroundColor: "white",
    display:'flex',
    alignItems: 'center',
    top: 676,
    
  }
});
