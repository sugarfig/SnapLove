import React, { useState, useEffect, useRef } from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text, Image, ScrollView} from "react-native";
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
import DropDownPicker from 'react-native-dropdown-picker';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import InfoPage from "../components/InfoPage";



const bitmoji = require("../assets/bitmoji.png");
const jobs  = require("../assets/jobOutline.png");
const counsling  = require("../assets/counslingOutline.png");
const internship  = require("../assets/internshipsOutline.png");
const workshop  = require("../assets/workshopsOutline.png");
const logo = require("../assets/SnapLoveLogo.png")

var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height
const LOS_ANGELES_REGION = {
  latitude: 34.0522,
  longitude: -118.2437,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};


export default function MapScreen({ navigation, route }) {

  const [snapLove, setSnapLove] = useState(false);
  const refRBSheet = useRef();
  const [currLocation, setCurrLocation] = useState(null);
  const mapView = useRef(null);
  const [currOrg,setCurrOrg]=useState('');
  
  const [currOrgData,setCurrOrgData] = useState(null)

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

  }
  function changeToRequestForm(){
    navigation.navigate("RequestForm");
  }


  console.log(currOrgData)
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
          </View>
          
         
        ) : null}
        {(currLocation && snapLove) ? (
          <View>
            {coordinates.map(coor => {
              return <Pin key={coor.key} title={coor.key} setCurrOrgData={setCurrOrgData} index={coor.index} refRBSheet={refRBSheet} setCurrOrg={setCurrOrg} location={coor.coordinate}  icon={coor.icon}></Pin>
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
            onPress={changeToRequestForm}
          >
            <Text style={styles.submitText}>suggest</Text>
          </TouchableOpacity>
          <View style={styles.dropDownContainer}>
            <TouchableOpacity
              style={styles.snapLoveButton}
              onPress={turnOnSnapLove}
            > 
           
              <View style={{display:'flex',justifyContent:'space-around'}}>
                <View style={{backgroundColor:'white',width: 130, height: 50, borderRadius: 550, right:150 }}>
                  <Text style={{textAlign:'center', display:'flex', marginTop: 15,color:'black',fontWeight:'bold',fontSize:18}}>SnapLOVE</Text>
                </View>
              <View style={styles.submitText}></View>
                
              </View>
        
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.snapLoveButton2}
          >
            <Ionicons style={{top:8,display: 'flex', alignSelf:'center',}} size={30} name="chevron-up-outline" color='white'></Ionicons>
          </TouchableOpacity>
          </View>
         
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
            {currOrg === "" ?
            ( <View  style={{flex: 1}}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{backgroundColor:'#F8F8F8'}}>
                <Text style={{marginTop:20, marginBottom: 20, marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>Find Resources</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom: 30}}>
                  <CircleIcon icon={counsling} text='Counselings'></CircleIcon>
                  <CircleIcon icon={workshop} text='Workshops'></CircleIcon>
                  <CircleIcon icon={internship} text='Internships'></CircleIcon>
                  <CircleIcon icon={jobs} text='Jobs'></CircleIcon>
                </View>
                <View style={{display:'flex', alignItems:'center'}}>
                  <Card title="Mirror Memiors" description="Description"></Card>
                  <Card title="It Gets Better" description="Description"></Card>
                  <Card title="Acess Points" description="Description"></Card>
                </View>
              </ScrollView>
            </View>) : 
            (<InfoPage 
            buisnessName = {coordinates[currOrgData].buisnessName} 
            buisnessType = {coordinates[currOrgData].buisnessType} 
            buisnessLocation = {coordinates[currOrgData].buisnessLocation} 
            buisnessWebsite = {coordinates[currOrgData].buisnessWebsite}
            buisnessDetails = {coordinates[currOrgData].buisnessDetails}
            topRightButton = {"Save"}
            onPress={()=>{
            refRBSheet.current.close();
            navigation.navigate("InviteFriends");
           
          }}
            // iconName = 'school-outline'
            />)}
               
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
    right: 10,
    display: 'flex',
    alignSelf: 'flex-end',
    
  },
  submitButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    marginBottom: 10,
    marginLeft: 5,
  },
  submitText: {
    fontSize: 13,
    top: 15,
    display: 'flex',
    alignSelf:'center',
    color:'white'
  },
  snapLoveButton:{
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#DEAAFF',
    margin: 5,
    top: 3,
  },
  snapLoveButton2:{
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#C4C4C4',
    margin: 5,
    top: 3,
  },
  resourcesContainer: {
    width: width,
    backgroundColor: "white",
    display:'flex',
    alignItems: 'center',
    top: 676,
  },
  dropDownContainer: {
    height: 130,
    width: 60,
    backgroundColor: 'rgba(0,0, 0, 0.41)',
    borderRadius: 50
  }
});