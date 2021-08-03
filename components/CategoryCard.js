import * as React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
function CategoryCard(props){
    return(
        <TouchableOpacity>
            <View style={styles.catergoryContainer}>
                <View>
                    <Image source={props.img} style={styles.imgContainer}></Image>
                </View>
                
                <Text style={{fontSize:25}}>{props.name}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    catergoryContainer: {
        height: 60,
        width: width -30,
        backgroundColor: 'white',
        borderRadius: 10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        marginBottom:1,

    },
    imgContainer:{
        width: 50, 
        height: 50,
    }
    

})


export default CategoryCard;