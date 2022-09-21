import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Entypo } from '@expo/vector-icons'; 

export default function FacialCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
//   const [camera, setCamera] = useState(null);
  const camera = useRef(null);

    //   if (!permission) ... 
    //   if (!permission.granted) ... 

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  const takePicture = async () => {
    // if (camera) {
      console.log("gvjhbjnk;gjvhbjlk");
      const data = await camera.current.takePictureAsync({ quality: 0.5, base64: true });
      console.log(data.uri);
    // }
  };

    //  const takePicture = async () => {
    // if (camera) {
    //     const options = { quality: 0.5, base64: true };
    //     const data = await camera.current.takePictureAsync(options);
    //     Alert.alert("Successful",data.base64);
    //     // console.log(data.uri);
    // }
    // };

  return (
    <View style={styles.container}>

      <Camera style={styles.camera} type={type}>

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity> */}

          
            <Entypo onPress={takePicture} name="circle" size={54} color="white" style={styles.cameBtn} />
            {/* <Text style={styles.text}>take pic</Text> */}
        
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        
    },  
    camera: {
        width: 300,
        height: 300,
        overflow: "hidden",
        
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20,
        overflow: "hidden",
      
    },
    // button: {
    //     flex: 0.1,
    //     alignSelf: 'flex-end',
    //     alignItems: 'center',

    // },
    //button circle
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        height: 50,
        width: 100,
        padding: 10,
        margin: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    cameBtn: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },

});