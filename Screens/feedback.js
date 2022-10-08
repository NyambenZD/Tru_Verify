import React, { useState, useEffect } from "react";
import { firebase, db } from "../Firebase/Firebase";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Dimensions,
  
} from "react-native";
import { Appbar, Button, Chip, Card, Text, Title } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Post from "../Screens/post";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const width_ = Dimensions.get("screen").width;
const height_ = Dimensions.get("screen").height;

export default function Comments() {
  const [date, setDate] = useState(null);
  const [post, setPost] = useState(""); //Post initial state
  const [postInputs, setPostInputs] = useState([{}]);

  //Setting new date for each posted comment feedback from users
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setDate(date);

    var comRef = db.collection("feedback");
    comRef
      .get()
      .then((snapshot) => {
        const tempComments = [];
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), uid: doc.id };
          tempComments.push(data);
        });
        setPostInputs(tempComments);
        console.log(PostInputs);
      })
      .catch((error) => console.log(error));
      
  }, []);

  const updateDB = (feedback) => {
    db.collection("feedback")
      .add({ feedback })
      .then((documentReference) => {
        console.log("document reference ID", documentReference.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Function for button to render the inputs - outputs from the comment section
  const handlePost = () => {
    Keyboard.dismiss();
    setPostInputs([...postInputs, post]);
    updateDB(post);
    setPost(null);
  };

  console.log(postInputs);
  return (

    
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}

      {/* <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      > */}
        <Appbar.Header style={styles.headbar}>
          <Appbar.Content title="Feedback Comments" />
        </Appbar.Header>
        <View style={styles.tasksWrapper}>
          {/* <Text>Share your feedback with us!!</Text> */}
          {/*scrollview  */}
          <ScrollView  contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
          <Text>
            We would like to know how we can improve our App for you to have a
            more secured validating tool in your hand all the time.
          </Text>

          <View>
          {postInputs.map((item, I) => (
              <Post postdate={date} posttext={item.feedback} key={I} />
            ))}
          </View>
          </ScrollView>
        </View>

        
        {/* Users comments goes here */}
        
        <View style={styles.footer}>
          <View></View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.input}
            placeholder={"Write your comment"}
            value={post}
            onChangeText={(text) => setPost(text)}
          />
          {/* Posting your comment or feedback using this button! */}

          <Button
            style={styles.postbutt}
            mode="text"
            uppercase={false}
            onPress={() => handlePost()}
          >
            <Text style={styles.postitxt}>post</Text>
          </Button>
          
        </View>
      {/* </ScrollView> */}
    </View>
  );
}

{
  /* Page Styling  */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FED0',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#e6e6e6",
  },
  headbar: {
    backgroundColor: "#ecf4fa", //Main backgroundCoolor: `#d2691e` of our App

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "FFF", //Changed colour to adapt to the page wrapper
    padding: 10,
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderColor: "lightblue",
    // height: height_ * 0.09,
    width: width_,
    height: height_ * 0.09,
    borderWidth: 1,
    textAlign: "center",
    // left: width_ * 0.01,
    marginTop: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d2691e",
    borderWidth: 1,
  },
  addbox: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    // backgroundColor: "lightblue",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    margin: 20,
  },
  postbutt: {
    marginRight: 20,
  },
  //fix the button to the bottom of the page
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: height_ * 0.15,
    width: width_,
    backgroundColor: "#ecf4fa",
    alignContent: "center",
  },
  postitxt: {
    fontSize: 22,
    // fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
});

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function AboutUs() {
//     return (

//         <View style={styles.container}>
//             <Text style={styles.settings}>Settings</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         marginTop: 50,

//         borderTopWidth: 5,
//         borderTopColor: "#FED000",
//         paddingBottom: 1,
//         flexDirection: "column",

//     },

//     settings: {
//         fontSize: 20,
//         fontWeight: 'normal',
//         flexWrap: 'wrap',
//         //marginTop: 50
//     }
// });
