import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar translucent backgroundColor="#009387" barStyle="light-content" /> */}
      <StatusBar translucent barStyle="light-content" />

      <Animatable.View animation="fadeInDownBig" style={styles.header}> 
        <Image
          source={require("../assets/bulb.webp")} 
          style={styles.logo}
          
        />
        {/* the different image containers */}
        <View style={styles.imageindicator}>
        <View style={styles.imageindi}/>
        <View style={[styles.imageindi,styles.imageindiActive]}/>
        <View style={styles.imageindi}/>


        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <View>
          <Text style={styles.welcometxt}> Tru-Verify</Text>
          <Text style={styles.welcometxt}> welcomes you!</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.paratxt}>Join the family</Text>
            <Text style={styles.paratxt}>and know what's happening around you!</Text>
            <Text></Text>
            <Text></Text>

          </View>
        </View>
        <View></View>
      </Animatable.View> 
      <View style={[styles.footer]}>
        <Animatable.View animation="fadeInRight" style={styles.button}> 
          <TouchableOpacity onPress={() => navigation.navigate("signin") }>
            <View style={styles.signIn}>
              <Text style={styles.textSign}>GET STARTED</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View> 
      </View>

      
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({

  logo: {
    width: height_logo,
    height: height_logo,
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
    
  },
  imageindicator: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageindi: {
    height: 3,
    width: 30,
    backgroundColor: 'grey',
    marginHorizontal: 5,
    borderRadius: 5, 
  },

  imageindiActive: {
    backgroundColor: 'black',
  },

  welcometxt: {
    fontSize: 32,
    fontWeight: 'bold',
  }, 

  paratxt: {
    fontSize: 16,
    color: 'grey',
  },

  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
  },
  signIn: {
    color: "#05375a",
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 20,
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    alignItems: "center",
  },
  
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  }

});