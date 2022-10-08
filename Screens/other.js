import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Linking
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Text} from "react-native-paper";

const Contacts = ({ state, setState }) => {

    const CableTheft = '011 4707900' 
    const AntiFraud = '0800002587' 
    const number = '0114907484' 
    const message = "I would like to enquire about my meter reading ..." 
    const message2 = "I would like to submit my meter readings"

  return (
    <ScrollView>
      <View>
          <Card style={styles.card}>
            <Card.Title title="Metering Queries"></Card.Title>
            <Card.Content>               
              <Text>Send your queries to:</Text>
              <Text>Email: wmcqueries@citypower.co.za</Text> 
                <View style={styles.buttonContainer}> 
                    <Button title="Queries" onPress={() => { 
                        Linking.openURL(`mailto:wmcqueriest@citypower.co.za?subject=Queries&body=${message}`) 
                    }} color="white" />
                </View>
              <Text>Telephone: 011 490 7484</Text>
                <View style={styles.buttonContainer}> 
                    <Button title="call for queries" onPress={() => { 
                        Linking.openURL(`tel:${number}`) 
                    }} color="white" /> 
                </View> 
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
                <View style={styles.buttonContainer}> 
                    <Button title="Meter Reading" onPress={() => { 
                        Linking.openURL(`mailto:eastimations@citypower.co.za?subject=MeterReadings&body=${message2}`) 
                    }} color="white" /> 
                </View> 
            <Text>Telephone: 011 490 7484</Text>
            <View style={styles.buttonContainer}> 
                <Button title="call to submit meter reading" onPress={() => { 
                    Linking.openURL(`tel:${number}`) 
                }} color="white" /> 
            </View>
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

                <View style={styles.buttonContainer}> 
                    <Button title="report fraud and illegal connection" onPress={() => { 
                        Linking.openURL(`tel:${AntiFraud}`) 
                    }} color="white" /> 
                </View> 

                {/* <hr /> */}
                <Text>Cable Theft</Text>                
                <Text>Telephone: 011 490 7900</Text>

                <View style={styles.buttonContainer}> 
                  <Button title="report cable theft" onPress={() => { 
                      Linking.openURL(`tel:${CableTheft}`) 
                  }} color="white" />
                </View>

              </Card.Content>
          </Card>
      </View>
    </ScrollView>
  );

};

export default Contacts;

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
    backgroundColor: "#ecf4fa",
  },
  buttonContainer: { 
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#3e92d1",
    color: "white",
  }
});