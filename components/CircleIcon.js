import * as React from "react";
import { View,Text,ScrollView,StyleSheet,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


function CircleIcon(props){
    // const onPressButton = () => {
        
    // };

    return (
        <View style={{display:'flex', alignItems:'center'}}>

            <TouchableOpacity style={styles.button} >
                <Image source={props.icon}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"></Image>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold'}}>{props.text}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        height: 48,
        width: 90,
        borderRadius: 25,
        backgroundColor: 'white',
        marginBottom: 10,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    

})

export default CircleIcon;