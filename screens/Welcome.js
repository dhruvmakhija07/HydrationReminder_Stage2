import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Welcome extends React.Component{

    render(){
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image source={require('../assets/logo.jpg')} style={{width: 150, height: 150, alignItems: 'center', marginBottom: 20}}></Image>
                <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 25, color: '#121330'}}>HydroAlert</Text>
                <Text style={{alignSelf: 'center', fontSize: 15, color: '#121330'}}>Your Hydration Guardian!</Text>
                <TouchableOpacity style={{borderRadius: 5, width: 150, height: 40, backgroundColor: '#121330', alignItems: 'center', marginTop: 20, justifyContent: 'center', alignContent: 'center',}}
                onPress = {() => this.props.navigation.navigate('Login')}>
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 5, width: 150, height: 40, backgroundColor: '#33b2ff', alignItems: 'center', marginTop: 15, justifyContent: 'center', alignContent: 'center',}}
                onPress = {() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{color: '#121330',}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}