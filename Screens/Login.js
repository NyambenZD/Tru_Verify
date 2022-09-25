import React, { useContext, useState } from "react";
import {firebase ,db} from "../Firebase/Firebase";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
  BackHandler,
  
} from "react-native";
import * as Animatable from "react-native-animatable";
import CONTEXT from "../Routes/context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  var [Form, updateForm] = useState({
    username: "",
    password: "",
  });
  const { USER, SETUSER } = useContext(CONTEXT);

  function getText(key, value) {
    updateForm({
      ...Form,
      [key]: value,
    });
  }

  const loginHandle = (username, password) => {
    db.collection("users")
      .where("email", "==", username)
      .where("password", "==", password)
      .limit(1)
      .get()
      .then((user) => {
        console.log( user );
        if (user.empty) {
          alert("account not found!");
        } else {
          SETUSER( prev => prev = user);
          // alert("welcome");
         
        }
      });
  };
 
   // for the passowrd to show on and off for onpress

   const  [show, setShow ] = React.useState(false);

   const  [visible, setVisible ] = React.useState(true);
 
   //  password validation
 
   const [email, setEmail] = useState('');
 
   const [password, setPassword] = useState(true);
 
   // SECURING THE EMAIL
 
   const [checkValidEmail, setCheckValidEmail] = useState(false);
 
   const handleEmailCheck = (text) => {
 
     let re = /\S+@\S+\.\S+/;
 
     let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
 
  
 
     setEmail(text);
 
     if (re.test(text) || regex.test(text)) {
 
       setCheckValidEmail(false);
 
     } else {
 
       setCheckValidEmail(true);
 
     }
 
   }
 
  
 
   return (

    <SafeAreaView style={{flex:1}} >
      {/* <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}> */}

     <View style={{flex: 1, backgroundColor: 'white'}}>
 
       <View style={{...StyleSheet.absoluteFill}}>
 
       <ImageBackground
 
       source={require('../assets/power.jpg')}
 
       style={{flex: 1}}
 
       >
 
     <Animatable.View animation="fadeInUp" style={styles.container}>
 
       <StatusBar backgroundColor="green" barStyle="light-content" />
 
       <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
       <View style={styles.header}>
 
         <Text style={styles.text_header}>Welcome Back</Text>
 
       </View>
 
       <View style={[styles.footer]}>
 
         <Text style={[styles.text_footer]}>Email</Text>
 
         <View style={styles.action}>
 
           <MaterialIcons
 
           name={"person-outline"}
 
           size={26}
 
           color={"grey"}
 
           />
 
           <TextInput
 
             value={email}
 
             autoCorrect={false}
 
             placeholder=" "
 
             placeholderTextColor="#666666"
 
             style={[styles.textInput]}
 
             autoCapitalize="none"
 
             // onChangeText={(e) => getText("username", e)}
 
             onChangeText={(text) => handleEmailCheck(text)}
 
           />
 
         </View>
 
         {checkValidEmail ? (
 
           <Text>Please enter a valid email</Text>
 
         ) : (
 
           <Text></Text>
 
         )}
 
        
 
  
 
         <Text style={[styles.text_footer]}>Password</Text>
 
         <View style={styles.action}>
 
           <MaterialIcons
 
           name={"lock-outline"}
 
           size={26}
 
           color={"grey"}
 
           />
 
  
 
           <TextInput
 
             placeholder=" "
 
             value={password}
 
             secureTextEntry={visible}
 
             placeholderTextColor="#666666"
 
             style={[styles.textInput]}
 
             autoCapitalize="none"
 
             // onChangeText={(e) => getText("password", e)}
 
             onChangeText={text => setPassword(text)}
 
           />
 
           <TouchableOpacity style={styles.eyebtn} onPress={
 
             () => {
 
               setVisible(!visible)
 
               setShow(!show)
 
              
 
             }
 
           }>
 
             <MaterialCommunityIcons
 
             name={show === false ? 'eye-outline' : 'eye-off-outline'}
 
             size={26}
 
             color={"grey"}
 
             />
 
           </TouchableOpacity>
 
         </View>
 
  
 
        
        
         <View style={styles.button}>
 
           <TouchableOpacity
 
             style={styles.signIn}
 
             onPress={() => {
 
               loginHandle(Form.username, Form.password);
 
             }}
 
           >
 
             <Text style={[styles.textSign]}>Login</Text>
 
           </TouchableOpacity>
 
  
 
           <TouchableOpacity>
 
           <Text style={{ color: "#009387", marginTop: 15 }}>
 
             Forgot password?
 
           </Text>
 
         </TouchableOpacity>
 
  
        <TouchableOpacity 
            onPress={() => navigation.navigate("signup") }
            style={[styles.signIn]}
        >
          <Text style={[styles.textSignUp]}>Don't have an account</Text>
          </TouchableOpacity>

 
         </View>
         
 
       </View>
       </ScrollView>
 
     </Animatable.View>
 
     </ImageBackground>
 
     </View>
 
     </View>
     {/* </ScrollView> */}
      </SafeAreaView>
 
   );
 
 };
 
  
 
 export default SignInScreen;
 
  
 
 const styles = StyleSheet.create({
 
   container: {
 
     // flex: 1,
 
     backgroundColor: "white",
 
     marginTop: 350,
 
     borderTopLeftRadius: 100,
 
    
 
    
 
   }, 
  
 
   text_header: {
 
     color: "black",
 
     fontSize: 30,
 
     letterSpacing: 4,

     justifyContent: 'center',
 
     marginTop: 75,
 
     marginLeft: 25
 
   },
 
   text_footer: {
 
     color: "#05375a",
 
     fontSize: 15,
 
     marginTop: 10,
 
     marginLeft:30
 
   },
 
   action: {
 
     flexDirection: "row",
 
     marginTop: 10,
 
     borderBottomWidth: 3,
 
     borderBottomColor: "#f2f2f2",
 
     paddingBottom: 1,
 
     marginLeft: 25,
 
     marginRight:25
 
   },
 
   actionError: {
 
     flexDirection: "row",
 
     marginTop: 10,
 
     borderBottomWidth: 1,
 
     borderBottomColor: "#FF0000",
 
     paddingBottom: 5,
 
   },
 
   textInput: {
 
     flex: 1,
 
     marginTop: -12,
 
     paddingLeft: 10,
 
     color: "#05375a",
 
   },
 
   errorMsg: {
 
     color: "#FF0000",
 
     fontSize: 14,
 
   },
 
   button: {
 
     alignItems: "center",
 
     marginTop: 50,
 
   },
   signIn: {

    width: "100%",

    height: 50,

    justifyContent: "center",

    alignItems: "center",

    borderRadius: 10,

  },

  textSign: {

    fontSize: 20,

    alignItems: "flex-end",

    marginTop: 20,

  },

});












