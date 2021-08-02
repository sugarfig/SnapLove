import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/Colors";
import RBSheet from "react-native-raw-bottom-sheet";
import { Dimensions } from "react-native";
import CircleIcon from '../components/CircleIcon'
import coordinates from '../constants/Coordinates'
import Pin from '../components/Pin'
import Card from '../components/Card'

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
          <View>
            <Marker
              coordinate={currLocation}
              title={"Current Location"}
              description={"You are here!"}
            ><Image source={bitmoji}
              style={{width: 125, height: 125}}
              resizeMode="contain"></Image>
            </Marker>

            {coordinates.map(coor => {
              return <Pin key={coor.key} location={coor.coordinate} icon={coor.icon}></Pin>
            })}
          </View>
          
         
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
          <View style={styles.resourcesContainer}>
            <Ionicons
                  name={"menu-outline"}
                  size={40}
                  color={'black'}
                  style={{ marginTop: 5, marginLeft: 3 }}
                  onPress={() => refRBSheet.current.open()}
            />
          </View>
          <RBSheet
            height={400}
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
    
            customStyles={{
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#000"
              }
            }}
          >
            
              
                <View  style={{flex: 1}}>
                  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={{marginBottom: 20, marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>Find Resources</Text>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom: 30}}>
                      <CircleIcon  text='scholarships'></CircleIcon>
                      <CircleIcon  text='workshops'></CircleIcon>
                      <CircleIcon  text='search'></CircleIcon>
                      <CircleIcon  text='jobs'></CircleIcon>
                    </View>
                    <View style={{display:'flex', alignItems:'center'}}>
                      <Card title="Mirror Memiors" description="Description"></Card>
                      <Card title="It Gets Better" description="Description"></Card>
                      <Card title="Acess Points" description="Description"></Card>
                    </View>
                  </ScrollView>
                </View>
             
            
            
          </RBSheet>
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
