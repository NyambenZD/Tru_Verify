import * as React from "react";
import { View, Image,Text, button, 
  TextInput, 
  StyleSheet,  
  ScrollView,
  SafeAreaView, 
  Dimensions,

} from "react-native";
import { initializeApp } from "firebase/app";

import { Avatar } from 'react-native-paper';
import {
  getStorage,
  ref,

} from "firebase/storage";
const height_ = Dimensions.get("screen").height;
const width_ = Dimensions.get("screen").width;
const firebaseConfig = {
  apiKey: "AIzaSyCoq3HX1N-ZjuBhZDeJKX4fLdB5qPT9Afk",
  authDomain: "tru-v-82ce9.firebaseapp.com",
  projectId: "tru-v-82ce9",
  storageBucket: "tru-v-82ce9.appspot.com",
  messagingSenderId: "948643148524",
  appId: "1:948643148524:web:4107ac87968a4e5d312bc9",
  measurementId: "G-H1TVQ31611",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default function DetailsScreen({ navigation, route }) {
  const [contractor, setContractor] = React.useState();

  React.useEffect(() => {
    setContractor(route.params.contractor);
    console.log("BATCHID =>",contractor);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
    <View style={styles.veiw}>
      
     
     <Avatar.Image style={styles.avatar}  size={250} source={{uri:contractor?.image}} />

    <TextInput
        value={contractor?.fullname}
        placeholder="Names"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={contractor?.occupation}
        placeholder="occupation"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={contractor?.employer}
        placeholder="Employer"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={contractor?.region}
        placeholder="Region"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />

      {/* image from assets */}

    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    height: height_ ,
    width: width_ ,
  },
  textBoxes: {
    width: width_ * 0.98,
    top: height_ * 0.05,
    fontSize: 18,
    padding: 12,
    borderColor: "lightblue",
    borderWidth: 0.2,
    borderRadius: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 20,
    borderWidth: 1.2,
    color: "black",
    textAlign: "center",
    //border shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  avatar: {
    top: height_ * 0.015,
    borderColor: "lightblue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    //space bettween
    marginBottom: 20,
  },

  profImg: {
    height: height_ * 0.2,
    width: width_ * 0.45,
    borderColor: "#FED000",
    borderWidth: 1,
    position: "relative",
    left: 5,
    borderRadius: 1500,
    marginTop: -490,
    // position: 'relative',
    marginBottom: 25,
  },
  veiw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf4fa",
    height: height_ * 0.9,
  },
  // topDiv: {
  //   height: height_ * 0.95,
  //   width: width_,
  //   backgroundColor: 'yellow',
  //   // backgroundColor: 'rgba(3, 0, 111, 0.8)',
  //   // borderWidth: 1,
  //   position: "relative",
  //   top: 0,
  // },
});