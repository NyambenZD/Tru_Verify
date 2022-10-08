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
  const [data, setData] = React.useState();

  React.useEffect(() => {
    var { contractor } = route.params;
    setData(contractor);
    console.log("CONTRACTOR =>",contractor);
    // console.log(typeof(id[/'id']));
    // console.log(data);

    getDownloadURL(ref(storage, 'images/stars.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();


    console.log(url);
    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      > */}
    <View style={styles.veiw}>
      {/* <View
        style={{
          height: height_ * 0.15,
          width: width_,
          backgroundColor: "#ecf4fa",
          top: height_ * 0.04,
          pointerEvents: "none",
        }}
      >
        <Text
          style={{
            color: "#3e92d1",
            fontSize: 30,
            fontWeight: "900",
            textAlign: "center",
            top: height_ * 0.05,
          }}
        >
           Contractor
        </Text>
      </View> */}
      {/* <Text
        onPress={() => navigation.navigate("Home")}
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "orange",
          marginBottom: 20,
        }}
      >hi</Text> */}
      {/* <Image
                style={{
                    width: 51,
                    height: 51,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'data:image/png;base64,'
                }}
            /> */}

            {/* image avater */}
            {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}

      {/* <TextInput style={styles.topDiv} value="" /> */}

      {/* <TextInput style={styles.profImg} /> */}

      {/* avatar returning image fom firebase storage */}
      {/* {console.log("DATA AVATAR:", data?.avatar)} */}


          <View style={{
          height: height_ ,
          width: width_,
          // left: width_ * 0.05,
          top: height_ * 0.0001,
          backgroundColor: "#ecf4fa",
          justifyContent: "center",
          pointerEvents: "none",

        }}>  
{/*         
     <Avatar 
       size={100} 
       source={{ uri: data?.avatar ? 
        data.Avatar: "https://www.goarabic.com/vm/wp-content/uploads/2019/05/dummy-profile-pic.jpg" }} 
       style={styles.profImg}
       />  */}

      {/* call base64 images from firebase storage */}
      <Avatar 
        style={{
          width: width_ * 0.73,
          height: height_ * 0.35,
          resizeMode: 'contain',
          // top: height_ * 0.001,
          left: width_ / 7.5,
          borderRadius: 3200,
        }}
        source={{
          uri: data?.avatar?
          data.avatar: "https://www.goarabic.com/vm/wp-content/uploads/2019/05/dummy-profile-pic.jpg"
        }}
      />
      
      <TextInput
        value={data?.fullname}
        placeholder="Names"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={data?.occupation}
        placeholder="occupation"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={data?.employer}
        placeholder="Employer"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />
      <TextInput
        value={data?.region}
        placeholder="Region"
        style={styles.textBoxes}
        editable={false}
        keyboardType="none"
      />

    </View>
    </View>
    {/* </ScrollView> */}
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
    top: height_ * 0.000005,
    fontSize: 18,
    padding: 12,
    borderColor: "#ecf4fa",
    borderWidth: 0.2,
    borderRadius: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "#3e92d1",
    fontSize: 20,
    borderWidth: 1.2,
    opacity: 0.5,
    color: "white",
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