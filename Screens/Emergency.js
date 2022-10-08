import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity,Dimensions } from 'react-native';


const height_ = Dimensions.get("screen").height;
const width_ = Dimensions.get("screen").width;

export default class EmergencyCall extends Component {

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${10111}';
    } else {
      phoneNumber = 'tel:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.TextStyle}> Emergency call</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    touchableButton: {
      // make button a circle with animation
      width: width_ / 1.5,
      height: width_ / 1.5,
      borderRadius: width_ / 2,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      // shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 5,
    }

  });