import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
  }

  
  toggleTheme() {
    this.setState({
      toggle: this.state.toggle ? false : true
    })
  }
  render() {
    return (
    <View style={[styles.container, {backgroundColor: this.state.toggle ? 'white' : 'black'}]}>
    
      <TouchableOpacity 
      onPress={() => this.toggleTheme()} style={styles.button}>
        <Text style={[styles.text, {color: this.state.toggle ? 'black' : 'white'}]}>Click to change Theme</Text>
      </TouchableOpacity>
    </View>
    
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'bold',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button:{
    alignItems: 'center',
    padding:10
  }
});