import * as React from "react";
import { StyleSheet, View, Dimensions, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


var width = Dimensions.get('window').width
function Card(props){
    return (
        <View style={styles.cardContainer}>
            <LinearGradient
            colors={['rgba(255, 10, 84, 0.49)', 'rgba(222, 170, 255, 0.73)', '#C8E7FF', '#C0FDFF']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center', borderRadius:35, marginLeft: '5%', marginRight: '5%'}}
            >
                <View style={{height:55,width:55, borderRadius:27.5, backgroundColor:'white'}}></View>
            </LinearGradient>
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: width - 180}}>
                <View >
                    <Text style={{fontWeight:'bold',fontSize: 20}}>{props.title}</Text>
                    <Text>{props.description}</Text>
                </View>
                <View>
                    <Text>Aug</Text>
                    <Text style={{textAlign: 'center', fontSize:22, fontWeight:'bold'}}>31</Text>
                </View>
            </View>
            
        </View>
     )
    
}
const styles = StyleSheet.create({

    cardContainer:{
        backgroundColor:'#FFFFFF',
        borderRadius: 30,
        width: width - 30,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent:'space-around',
        alignItems: 'center',
        marginBottom: 20,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'gray',
        shadowOpacity: 0.2,

    }
})
export default Card;