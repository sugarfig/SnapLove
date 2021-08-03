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


const jobs  = require("../assets/jobs-1.5x.png");
var height = Dimensions.get('window').height;
function EditCategoryScreen(){
    return(
        <View style={{backgroundColor:'#E5E5E5', height:height}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Ionicons
              name={"chevron-back-outline"}
              size={40}
              style={{margin: 10}} />
            </TouchableOpacity>
            
             <Text style={{marginLeft:90, fontSize: 20, fontWeight:'bold'}}>Edit Category</Text>
          </View>
          <Text style={{marginLeft:10, fontSize: 22, fontWeight:'bold',marginBottom:10}}>Choose a Category</Text>
          <View style={{display:'flex',alignItems:'center'}}>
          
            <CategoryCard img={jobs} name='Jobs'></CategoryCard>
            <CategoryCard img={jobs} name='Jobs'></CategoryCard>
            <CategoryCard img={jobs} name='Jobs'></CategoryCard>
            <CategoryCard img={jobs} name='Jobs'></CategoryCard>


          </View>
  
        

        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer:{
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      
    }
    

})

export default EditCategoryScreen;