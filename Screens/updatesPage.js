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


import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['LOADSHEDDING SCHEDULE 21/07/2022', 'TIME', 'BLOCKS AFFECTED'],
      DataTable: [
        ['','00:00 - 02:00', 'Blocks 1,3,5,6'],
        ['', '06:30- 08:30', 'Blocks 9 , 13, 11 ,12'],
        ['', '12:30 - 14:30', 'Blocks 10, 4 ,7 ,8'],
        ['', '16:00 - 18:00', 'Blocks 2, 5 ,11 ,12 '],
        ['', '20:00 - 22:00', 'Blocks 1 ,4 ,10 ,9'],
        ['', '16:00 - 18:00', 'Blocks 12, 5 ,6 ,9 '],
        ['', '20:00 - 22:00', 'Blocks 1 ,3 ,7 ,10'],
        ['\n \n','\n\n', '\n\n'],
        
        ['22/07/2022','', ''],
        ['','TIME','BLOCKS TO BE AFFECTED']
        ['', '06:30- 08:30', 'Blocks 2 , 3, 10 ,14'],
        ['', '12:30 - 14:30', 'Blocks 1, 4 ,7 ,11'],
        ['', '16:00 - 18:00', 'Blocks 12, 5 ,6 ,9 '],
        ['', '20:00 - 22:00', 'Blocks 1 ,3 ,7 ,10'],
        ['', '16:00 - 18:00', 'Blocks 12, 5 ,6 ,9 '],
        ['', '20:00 - 22:00', 'Blocks 1 ,3 ,7 ,10'],
         ['', '16:00 - 18:00', 'Blocks 12, 5 ,6 ,9 '],
        ['', '20:00 - 22:00', 'Blocks 1 ,3 ,7 ,10'],
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#00008b'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#f8f8ff' 
  },
  HeadStyle: { 
    height: 60,
    alignContent: "center",
    backgroundColor: '#FED000'
  },
  TableText: { 
    margin: 10
    
  }


  
});