import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import WaterCal from "./watercal";

export default class Dashboard extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 15}}>How much water do you consume?</Text>
            <WaterCal/>
            </View>
        )
    }
}