import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import CategoryCard from "../components/CategoryCard";


const jobs  = require("../assets/jobOutline.png");
const counsling  = require("../assets/counslingOutline.png");
const internship  = require("../assets/internshipsOutline.png");
const workshop  = require("../assets/Workshop-1.5x.png");
var height = Dimensions.get('window').height;
function EditCategoryScreen(){
    return(
        <View style={{backgroundColor:'#E5E5E5', height:height}}>
          <Text style={{marginLeft:10, fontSize: 22, fontWeight:'bold',marginBottom:10, marginTop: 50,}}>Choose a Category</Text>
          <View style={{display:'flex',alignItems:'center'}}>
          
            <CategoryCard img={jobs} name='Jobs'></CategoryCard>
            <CategoryCard img={counsling} name='Counseling'></CategoryCard>
            <CategoryCard img={internship} name='Internship'></CategoryCard>
            <CategoryCard img={workshop} name='Workshop'></CategoryCard>


          </View>
  
        

        </View>
    )
}
const styles = StyleSheet.create({

    

})

export default EditCategoryScreen;