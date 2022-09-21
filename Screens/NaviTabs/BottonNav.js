import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../main';
import DetailsScreen from '../profile';
import Validate from '../Validate';


const NavTabz =() => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Homepage" component = {Home} />
            <Tab.Screen name="Homepage" component = {DetailsScreen} />
            <Tab.Screen name="Homepage" component = {Validate} />

        </Tab.Navigator>
    )
}


export default NavTabz;
