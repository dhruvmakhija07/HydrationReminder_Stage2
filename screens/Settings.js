import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Noti from "./Noti";

export default class Settings extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 15}}>My Notifications</Text>
                <Noti/>
            </View>
        )
    }
}