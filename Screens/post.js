import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createIconSet, AntDesign, IonIcons } from "@expo/vector-icons";

const Post = (props) => {
  return (
    <View style={styles.coms}>
      {/* The output of the comment section with avatar, date, and comment message */}
      <View style={styles.comLeft}>
        <Text style={styles.square}>
          <AntDesign name="user" size={24} color="black" />{" "}
          {/*Avatar or Profile pic*/}
          <Text style={styles.comment}>
          {props.postdate}
            -
          {/* {'\n'} */}
          {props.posttext}
        </Text>
        </Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coms: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 20,
    //marginRight: 20,
    //paddingRight: 20,
    flex: 1,
    margin: 20,
    flexDirection: "row",
  },
  comLeft: {
    //flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    //width: 24,
    height: 50,
    backgroundColor: "#f5f5f5",
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15,
    flexDirection: "row",
  },
  comText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Post;
