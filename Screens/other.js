import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Text, Button} from "react-native-paper";

const MyPower = ({ state, setState }) => {

  return (
    <ScrollView>
      <View>
          {/* <Appbar style={styles.topbar}>MyPower</Appbar> */}
          <Card style={styles.card}>
              <Card.Title title="Metering Queries"></Card.Title>
              <Card.Content>               
                <Text>Send your queries to:</Text>
                <Text>Email: wmcqueries@citypower.co.za</Text>
                <Text>Telephone: 011 490 7484</Text>
                {/* <hr /> */}
                <Text>Office Hours:</Text>
                <Text>Mon-Fri: 07am - 19pm</Text>
                <Text>Sat: 8am - 14pm</Text>
                <Text>Sun & Public Holidays: 8am - 13pm</Text>
              </Card.Content>
          </Card>

          <Card style={styles.card}>
          <Card.Title title="Meter Reading Submissions"></Card.Title>
          <Card.Content>
            <Text>Submit your readings to:</Text> 
            <Text>Email: eastimations@citypower.co.za</Text>
            <Text>Telephone: 011 490 7484</Text>

            {/* <hr /> */}

            <Text>Office Hours:</Text>
            <Text>Mon-Fri: 07am - 19pm</Text>
            <Text>Sat: 8am - 14pm</Text>
            <Text>Sun & Public Holidays: 8am - 13pm</Text>
          </Card.Content>
          </Card>

          <Card style={styles.card}>
              <Card.Title title="Report Anonymously"></Card.Title>
              <Card.Content>               
                <Text>Anti-Fraud & Illegal Connection:</Text>               
                <Text>Telephone: 0800  002 587</Text>
                {/* <hr /> */}
                <Text>Cable Theft</Text>                
                <Text>Telephone: 011 490 7900</Text>
              </Card.Content>
          </Card>
      </View>
      </ScrollView>
  );

};

export default MyPower;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa500",
    justifyContent: "center",
    alignItems: "center"
  },
  topbar: {
    fontWeight: 'bolder',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'orange',
  },
  card: {
    margin: 25,
    marginBottom: 30,
    borderRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "#ffa500",
  },
});