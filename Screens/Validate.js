import * as React from "react";
import { initializeApp } from "firebase/app";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
  Image,
  Avatar,
} from "react-native";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Button, Center } from "native-base";
import Scanner from "./Scan";
import {getStorage, ref} from "firebase/storage";
// import FacialCamera from "./facialcamera";
import * as Animatable from "react-native-animatable";
//navigation to back page import
// import {Link, Routes, Route, useNavigate} from 'react-router-dom';

//

//import { CreateStackNavigation } from 'react-navigation-stack';

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCoq3HX1N-ZjuBhZDeJKX4fLdB5qPT9Afk",
  authDomain: "tru-v-82ce9.firebaseapp.com",
  projectId: "tru-v-82ce9",
  storageBucket: "tru-v-82ce9.appspot.com",
  messagingSenderId: "948643148524",
  appId: "1:948643148524:web:4107ac87968a4e5d312bc9",
  measurementId: "G-H1TVQ31611",
};


//initialize firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const height_ = Dimensions.get("screen").height;
const width_ = Dimensions.get("screen").width;

export const getContractor2 = async (batchid) => {
  //collection ref
  const colRef = collection(db, "contractors");

  //query the collection 
  const q = query(colRef, where("batchid", "==", batchid));


  var contractors = [];

  await onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc) => {
      contractors.push({ ...doc.data(), id: doc.id });
    });
    console.log(contractors);
    return contractors;
  });

  return contractors;
};

export default function Validated({ navigation }) {
  //back button navigation to previous page function
  // const navigate = useNavigate();

  const [batchid, setBatchID] = React.useState({});
  const [scan, setScan] = React.useState(false);
  const [contractor, setContractor] = React.useState({});
  const [facialcam, setFacialCam] = React.useState({});

  const verification = () => {
    if (batchid["batchid"] === batchid["batchidConfirm"]) {
      const getContractor = async (batchid) => {
        //collection ref
        const colRef = collection(db, "contractors");

        //query the collection
        const q = query(colRef, where("batchid", "==", batchid));
        var contractors = [];

        await onSnapshot(q, (snapshot) => {
          snapshot.forEach((doc) => {
            contractors.push({ ...doc.data(), id: doc.id });
          });
          if (contractors.length > 0) {
            setContractor(contractors);
            navigation.navigate("Profile", { contractor: contractors[0] });
          } else {
            // console.log('No contractor found');
            Alert.alert("No Contractor Found");
          }

          // setContractor(contractors);
          // console.log(contractors[0]);

          return contractors;
        });
      };

      getContractor(batchid["batchid"]);
    } else {
      //   console.log(
      //     "Batch ID does not match",
      //     "CALL THE POLICE OR EMERGENCY CONTACT!"
      //   );
      Alert.alert(
        "Does not match, call"
      );
    }
  };

  const verify = async () => {
    // check if the batch is equal to the confirm batch id
    if (batchid["batchid"] === batchid["batchidConfirm"]) {
      // console.log(batchid['batchid']);

      // .then(res => {
      //     console.log(res);
      //     let id = res;
      //     navigation.navigate('Profile', { id: id });
      // })
      const getContractor = async (batchid) => {
        //collection ref
        const colRef = collection(db, "contractors");

        //query the collection
        const q = query(colRef, where("batchid", "==", batchid));
        var contractors = [];

        await onSnapshot(q, (snapshot) => {
          snapshot.forEach((doc) => {
            contractors.push({ ...doc.data(), id: doc.id });
          });
          console.log(contractors[0]);
          return contractors[0];
        });

        // return contractors;
      };

      setContractor(getContractor(batchid["batchid"]));
      console.log(contractor);
    } else {
      Alert.alert("Batch ID does not match");
    }
  };

  function openScanner() {
    setScan(!scan);
  }

  function openCamera() {
    setFacialCam(!facialcam);
    //
  }

  const checkPic = async ( right, left) => {
    var myHeaders = new Headers();
    
    myHeaders.append("Content-Type", "text/plain");

    var raw = {
      left: left,
      right: right,
      api_key: "smuurt_5ece4797eaf5e",
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://138.128.244.103:90/smuurt-face-compare", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

 
  // TRY 1
  const openImagePickerAsync = async () => {
    // taking a photo from camera roll
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    let pickerResult = await ImagePicker.launchCameraAsync({ allowsEditing: true, base64:true, aspect: [4, 3] })

    let img64 = pickerResult.base64;
    console.log( img64 );

    checkPic( img64, img64 );
   }
  // TRY 1 


  return (
    //main container with color blue #3e92d1
    <SafeAreaView style={{ flex: 1, height: height_ }}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text
            style={{
              color: "#3e92d1",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
              top: height_ * 0.03,
            }}
          >
            Verify contractors
          </Text>
          {/* content container with color light greyish #e6e6e6 */}
          <View
            justifyContent={"center"}
            width={"100%"}
            alignItems={"center"}
      
          >
            <TextInput
              name="batchid"
              onChangeText={(text) => setBatchID({ ...batchid, batchid: text })}
              // value=''
              placeholder="CONTRACTOR BATCH ID"
              style={styles.textBoxes}
              keyboardType={"numeric"}
            />

            <TextInput
              name="batchid"
              // value=''
              onChangeText={(text) =>
                setBatchID({ ...batchid, batchidConfirm: text })
              }
              placeholder="CONFIRM BATCH ID"
              style={styles.textBoxes}
              keyboardType={"numeric"}
            />
            <Button
              style={{
                backgroundColor: "#FED000",
                width: "80%",
                // bottom: 800,
                borderRadius: 50,
                top: height_ * 0.05,
              }}
              marginY={5}
              onPress={() => verification()}
            >
              <Text style={styles.buttonText}>Validate </Text>
            </Button>

            <Button
              style={{
                backgroundColor: "#FED000",
                width: "80%",
                // bottom: 800,
                borderRadius: 50,
                top: height_ * 0.015,
              }}
              marginY={5}
              onPress={
                () => openScanner()
                //Alert.alert("Allow permission for the camera to open")
              }
            >
              <Text style={styles.buttonText}>QR Scanner</Text>
            </Button>

            {/* <Button
              style={{
                backgroundColor: "#FED000",
                width: "80%",
                // bottom: 800,
                borderRadius: 50,
              }}
              marginY={5}
              onPress={
                () => openCamera()
                //Alert.alert("Allow permission for the camera to open")
              }
            >
              Camera
            </Button> */}

          <Button
            onPress={openImagePickerAsync}
            style={{
              backgroundColor: "#FED000",
              width: "80%",
              // bottom: 800,
              borderRadius: 50,
              top: height_ * 0.00015,
            }}
          >
            <Text style={styles.buttonText}>Open camera</Text>
          </Button>

          </View>
          <Scanner state={scan} setState={setScan} />
          {/* <FacialCamera state={facialcam} setState={setFacialCam} /> */}
          <View style={styles.footer}></View>

          {/*  TRY 1 | CAMERA */}
          <Image
            source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
            style={styles.logo}
          />
{/*        
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Open camera</Text>
          </TouchableOpacity> */}
          {/*  TRY 1 | CAMERA */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  textBoxes: {
    width: width_ * 0.8,
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 20,
    top: height_ * 0.05,
  },
  buttonSearch: {
    height: 100,
    width: width_ * 0.4,
    backgroundColor: "blue",
    position: "relative",
    left: -100,
    top: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    width: width_  * 1,
    height: height_  * 0.06,
    justifyContent: "center",
    alignItems: "center",
    },
});
