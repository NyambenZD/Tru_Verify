import 'react-native-gesture-handler';
import React, { useState } from "react";
//import { StatusBar } from "expo-status-bar";
import Navigator from './Routes/Navigator';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CONTEXT from './Routes/context';


export default function App() {
  const [USER, SETUSER] = useState();

  // initial page
  return (
    <NativeBaseProvider >
      <NavigationContainer independent={true} >
        <CONTEXT.Provider value={{ USER, SETUSER }} >
          <Navigator />
        </CONTEXT.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
