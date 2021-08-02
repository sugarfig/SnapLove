import * as React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function CircleIcon(props){
    return (
        <View style={{display:'flex', alignItems:'center'}}>
            <TouchableOpacity style={styles.button} >
                <Text>{props.text}</Text>
                {/* <Ionicons name={props.name}
                size={30}></Ionicons> */}
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        height: 48,
        width: 90,
        borderRadius: 25,
        backgroundColor: 'gray',
        marginBottom: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    

})

export default CircleIcon;