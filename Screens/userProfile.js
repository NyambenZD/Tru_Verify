import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  View,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Title,
  Caption,
  Button,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App () {
const [Pic, SetPic] = React.useState('');
// show toast message
const setToastMsg = msg => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
};
const uploadImage = () => {
  let options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
  };

  launchImageLibrary(options, response =>{
    if (response.didCancel) {
      setToastMsg('Canceled image selection');
      
    }else if ((response.errorCode == 'permission')){
      setToastMsg('permission not satisfied ');
    }    
    else if ((response.errorCode == 'others')){
      setToastMsg(response.errorMessage);      
    }else if (response.assets[0].fileSize > 2097152) {
      Alert.alert(
        'Maximum image size exceeded',
        'Please choose image under 2 MB',
        [{text: 'OK'}],
      );
    } else {
      SetPic(response.assets[0].base64);
    }
  })
}

// const ProfileScreen = () => {
  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.userInfoSection}>
      {/* title and caption  will be next to the profile  */}
    <View style={{flexDirection: 'row', marginTop: 15}}> 
      
      <TouchableHighlight
      onPress={() => uploadImage()}>
      <Avatar.Image 
        onPress
        source={{
          uri: 'data:image/png;base64,' + Pic
        }}
        size={80}
      />
      </TouchableHighlight>
      <View style={{marginLeft: 20}}>
        {/* Name and email of user */}
        <Title style={[styles.title, {
          marginTop:15,
          marginBottom: 5,
        }]}>Zandi Mathibela</Title>
        {/* Caption is user ID  */}
        <Caption style={styles.caption}>@ZandiMathibela</Caption>
      </View>
    </View>
  </View>

  {/* // Display user information   */}
  <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Meredale, Johannesburg South</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+27 84 291 9961</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>zandimathibelankomo@gmail.com</Text>
        </View>
      </View>
      {/* Upload and Delete btn */}

      <View>
        <Button
        mode = "contained"
        onPress={() =>uploadImage() }
        >Upload Image </Button>
      </View>
    </SafeAreaView>
  );
// };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});



















// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   StatusBar,
//   Text,
//   // FlatList,
//   Dimensions,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
// } from 'react-native';
// const {width} = Dimensions.get('screen');


// const userProfile = ({navigation}) => {

//   return (
//     <SafeAreaView style={{backgroundColor: '#fff' , flex: 1}}>
//       <ScrollView showsVerticalScrollIndicator={true}>

        
//         <View style={{marginTop: 100}}>
        
//           <Image 
//           source={require('../assets/person.jpg')}
//           style={style.prof}

//           />
//         </View>

//         <View style={{marginTop: 30 }}>
//         <Text style={{textAlign: 'center', marginBottom: 20 }}> ProjectX</Text>
//         <Text style={{textAlign: 'center', }}> projectX@gmail.com</Text>
//         </View>
     
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   prof:{
//     //alignItems: 'center',
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     borderRadius: 50
//   }
  
// });
// export default userProfile;