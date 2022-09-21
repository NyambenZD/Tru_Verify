// import React, {useState} from 'react';
// import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
// import {Appbar, Button, Chip, Card, Title} from 'react-native-paper';
// import { AntDesign, Ionicons } from '@expo/vector-icons';
// import Post from '../Screens/post';


// export default function Comments() {
//   const [post, setPost] = useState();
//   const [postInputs, setPostInputs] = useState([]);

//   const handlePost = () => {
//     Keyboard.dismiss();
//     setPostInputs([...postInputs, post])
//     setPost(null);
//   }

  
//   return (
//     <View style={styles.container}>
//       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1
//         }}
//         keyboardShouldPersistTaps='handled'
//       >
//       <Appbar.Header style={styles.headbar}>
//             <Appbar.Content title="Feedback Comments" />
//       </Appbar.Header>
//       <View style={styles.tasksWrapper}>
        
//         <Text variant='headlineSmall'>
//           <b>Share your feedback with us!!</b>
//         </Text>
//         <Text variant='labelLarge'>
//           We would like to know how we can improve our App for you to 
//           have a more secured validating tool in your hand all the time.
//         </Text>
  
//         <View>
//           <Card style={styles.card}>
//             {/* Here are your comments */}
//             {
//               postInputs.map((post, index) => {
//                 return (
//                   <TouchableOpacity key={index}>
//                     <Post text={post} /> 
//                   </TouchableOpacity>
//                 )
//               })
//             }
//             </Card>
//         </View>
//       </View>
        
//       </ScrollView>
      

//       {/* Users comments goes here */}
//       <View style={styles.addbox}>
//         <TextInput
//           multiline={true}
//           numberOfLines={6}
//           style={styles.input} 
//           placeholder={'Write your comment'} 
//           value={post} onChangeText={text => setPost(text)} 
//         />
//         {/* Posting your comment or feedback using this button! */}
//         <Button style={styles.postbutt} mode="text" uppercase={false} onPress={() => handlePost()}>
//           <Text>post</Text>
//         </Button>
//       </View>
//     </View>
//   );
// }


// {/* Page Styling  */}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: '#FED0',
//   },
//   tasksWrapper: {
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },
//   headbar: {
//     backgroundColor: '#d2691e', //Main backgroundCoolor: `#d2691e` of our App
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 10,
//     marginTop: 20,
//   },
//   writeTaskWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     borderColor: '#d2691e',
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#d2691e',
//     borderWidth: 1,
//   },
//   addbox: {
//     flex: 1,
//     padding: 20,
//     marginTop: 10
//   },
//   button: {
//     margin: 20,
//   },
//   postbutt: {
//     marginRight: 20,
//   }
// });





// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';


// // export default function AboutUs() {
// //     return (

// //         <View style={styles.container}>
// //             <Text style={styles.settings}>Settings</Text>
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#fff',
// //         alignItems: 'center',
// //         justifyContent: 'space-evenly',
// //         marginTop: 50,

// //         borderTopWidth: 5,
// //         borderTopColor: "#FED000",
// //         paddingBottom: 1,
// //         flexDirection: "column",

// //     },

// //     settings: {
// //         fontSize: 20,
// //         fontWeight: 'normal',
// //         flexWrap: 'wrap',
// //         //marginTop: 50
// //     }
// // });



import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import {Appbar, Button, Chip, Card, Title} from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Post from '../Screens/post';


export default function Comments() {
  const [date, setDate] = useState(null);
  const [post, setPost] = useState();
  const [postInputs, setPostInputs] = useState([]);

  //Setting new date for each posted comment feedback from users
  useEffect(() => {
    let today = new Date();
    let date = today.getDate() +'/'+ (today.getMonth()+1) +'/'+ today.getFullYear();
    setDate(date);
  }, []);


  const handlePost = () => {
    Keyboard.dismiss();
    setPostInputs([...postInputs, post])
    setPost(null);
  }

  
  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <Appbar.Header style={styles.headbar}>
            <Appbar.Content title="Feedback Comments" />
      </Appbar.Header>
      <View style={styles.tasksWrapper}>
        
        <Text variant='headlineSmall'>
          <b>Share your feedback with us!!</b>
        </Text>
        <Text variant='labelLarge'>
          We would like to know how we can improve our App for you to 
          have a more secured validating tool in your hand all the time.
        </Text>
  
        <View>
          <Card style={styles.card}>
            {/* Here are your comments */}
            {
              postInputs.map((post, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <Post 
                      postdate = {date}
                      posttext={post} 
                    /> 
                  </TouchableOpacity>
                )
              })
            }
            </Card>
        </View>
      </View>
        
      </ScrollView>
      

      {/* Users comments goes here */}
      <View style={styles.addbox}>
        <TextInput
          multiline={true}
          numberOfLines={6}
          style={styles.input} 
          placeholder={'Write your comment'} 
          value={post} onChangeText={text => setPost(text)} 
        />
        {/* Posting your comment or feedback using this button! */}
        <Button style={styles.postbutt} mode="text" uppercase={false} onPress={() => handlePost()}>
          <Text>post</Text>
        </Button>
      </View>
    </View>
  );
}


{/* Page Styling  */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FED0',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headbar: {
    backgroundColor: '#d2691e', //Main backgroundCoolor: `#d2691e` of our App
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: 'FFF', //Changed colour to adapt to the page wrapper
    padding: 10,
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderColor: '#d2691e',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d2691e',
    borderWidth: 1,
  },
  addbox: {
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  button: {
    margin: 20,
  },
  postbutt: {
    marginRight: 20,
  }
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