import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component{
    render(){
        return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="My Notifications" component={Settings} />
      </Tab.Navigator>
        )
    }
}