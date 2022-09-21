import React, { useContext, useState } from "react";
import { firebase, db } from "../Firebase/Firebase";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import CONTEXT from "../Routes/context";

const height_ = Dimensions.get("screen").height;
const width_ = Dimensions.get("screen").width;

const SignUpScreen = ({ navigation }) => {
  var [Form, updateForm] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const {USER, SETUSER} = useContext(CONTEXT);

  function getText(key, value) {
    updateForm({
      ...Form,
      [key]: value,
    });
  }

  const loginHandle = (username, password, password2) => {
    if (password == password2) {
      db.collection("users")
        .where("email", "==", username)
        .where("password", "==", password)
        .limit(1)
        .get()
        .then((user) => {
          if (user.empty) {
            db.collection("users").add({ email: username, password: password });
            SETUSER( prev => prev = user);
          } else {
            alert("you already have an account");
          }
        });
    } else {
      alert("Passwords must match!!");
    }
  };

  return (
    
    <Animatable.View animation="fadeInUp" style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ImageBackground
      // source={require('../assets/welcome.jpg')}
 
      style={{flex: 1}}
      
      >
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign up with us</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="user@gmail.com"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(e) => getText("username", e)}
            />
          </View>

          <Text style={[styles.text_footer]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="***********"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(e) => getText("password", e)}
            />
            <TouchableOpacity></TouchableOpacity>
          </View>

          <Text style={[styles.text_footer]}>Confirm Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="********** "
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(e) => getText("password2", e)}
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
          
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                loginHandle(Form.username, Form.password, Form.password2);
              }}
            >
              <Text style={[styles.textSign]}>Register</Text>
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
              onPress={() => navigation.navigate("signin") }
              style={[styles.signIn]}
            >
              <Text style={[styles.textSign]}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>

            <Text style={[styles.color_textPrivate]}> Terms of service</Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate]}> Privacy policy</Text>
          </View>
        </ScrollView>
      </View>
      </ImageBackground>
    </Animatable.View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: -50,
    marginBottom: -50,
    marginLeft: 5,
    letterSpacing: -1
  },

  text_footer: {
    marginTop: 30,
    marginLeft:30
  },
  
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginRight: 30,
    marginLeft:30
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 15
    
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: width_ * 0.75,
    height: height_ * 0.055,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    //button size
    marginRight: 30,
    marginLeft:30,
    marginBottom: 10,
    backgroundColor: "black",
    
  },
  textSign: {
    fontSize: 15,
    marginLeft: 20, 
    alignItems: 'center',
    marginTop: 20,    
    paddingHorizontal: 32,
    borderRadius: 9,
    elevation: 3,
    color: "white",
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    adjustFontSizeToFit: true,
    numberOfLines: 1,
  },
  
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 200,
    justifyContent: "center",
    
  },
  color_textPrivate: {
    color: "grey",
  },
  space: {
    width: 20, 
    height: 20,
  },
});
