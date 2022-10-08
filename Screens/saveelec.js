import React, { useState } from "react";
import { firebase, db } from "../Firebase/Firebase";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Appbar, Text, Button } from "react-native-paper";

const PowerSave = ({ state, setState }) => {
  const [save, setSave] = useState([{}]);
  
  //call this if you want to add more tips
  const updateDB = (tips) => {
    db.collection("saveelec")
      .add({ tip: tips, type: "emergencies" })
      .then((documentReference) => {
        console.log("document reference ID", documentReference.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    var elecRef = db.collection("saveelec");
    elecRef
      .get()
      .then((snapshot) => {
        const tempComments = [];
        snapshot.forEach((doc) => {
          const data = { ...doc.data(), uid: doc.id };
          tempComments.push(data);
        });
        setSave(tempComments);
        //console.log(save);
      })
      .catch((error) => console.log(error));

    //updateDB(feedback);
  }, []);

  const result = (selector) =>
    save.map((item) => {
      return (
        item.tip &&
        item.type == selector &&
        item.tip.map((item2) => {
          return (
            <Card.Content>
              <Text>-{item2}</Text>
            </Card.Content>
          );
        })
      );
    });
  var tips = [
    "Turn-off the source of electricity after getting a electric shock.",
    "Begin CPR if the person shows no sign of breating circulation.",
    "Clean the area of a shock with mild soap and water.",
    "Apply bandage to the wound.",
    "Call 911 if the condition is more critical.",
  ];
  return (
    <ScrollView>
      <View>
        {/* <Appbar style={styles.Topbar}>Power Saving Tips</Appbar>  */}
        <Card style={styles.Card}>
          <Card.Title title="Lights"></Card.Title>
          {result("lights")}
          
          <Text style={styles.elecApi}>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Geyser"></Card.Title>
          {result("geyser")}
          <Text>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Cabling"></Card.Title>
          {result("cabling")}
          <Text>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Power Outleats and Sockets"></Card.Title>
          {result("power")}
          <Text>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Unattended Appliances"></Card.Title>
          {result("unattended")}
          <Text>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Liquid Hazards"></Card.Title>
          {result("liquid")}
          <Text>{'\n'}</Text>
        </Card>

        <Card style={styles.Card}>
          <Card.Title title="Emergencies"></Card.Title>
          {result("emergencies")}
          <Text>{'\n'}</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default PowerSave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa500",
    justifyContent: "center",
    alignItems: "center",
  },
  Topbar: {
    fontWeight: "bolder",
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "orange",
  },

  Card: {
    margin: 25,
    marginBottom: 30,
    borderRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "#ecf4fa",
  },
  elecApi: {
    justifyContent: "center",
    alignItems: "center",
  },

});
