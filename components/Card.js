import * as React from "react";
import { StyleSheet, View, Dimensions, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";


var width = Dimensions.get('window').width
function Card(props){
    return (
        <View style={styles.cardContainer}>
            <View style={styles.iconContainer}>
                <Ionicons
                name={props.icon}
                size={32}
                style={{ marginTop: 5, marginLeft: 3 }}
                />
            </View>
            <View>
                <Text style={{fontWeight:'bold',fontSize: 20}}>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>
            <View>
                <Text>July</Text>
                <Text>31</Text>
            </View>
        </View>
     )
    
}
const styles = StyleSheet.create({
    iconContainer:{
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    cardContainer:{
        backgroundColor:'#cad5e6',
        borderRadius: 30,
        width: width - 30,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        marginBottom: 20,

    }
})
export default Card;