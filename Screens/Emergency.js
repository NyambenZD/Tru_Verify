import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';


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
    touchableButton: {
      width: '80%',
      padding: 10,
      backgroundColor: 'red',
    },
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    }

  });