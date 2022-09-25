import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Home from "../Screens/main";
import Profile from './profile';
import Validate from './Validate';
import updatesPage from './updatesPage';
import userProfile from './userProfile';
import EmergencyCall from './Emergency';
import LogOut from './LogOut';
import Comments from './Comments';
import Feedback from './feedback';
import SaveElec from './saveelec';
// import load from './load';
import other from './other';
import Settings from './Settings';
import MyWeb from './MyWeb';


const Drawer = createDrawerNavigator();
function HomeDrawer() {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}

        name="Home" component={Home} />
        
         <Drawer.Screen
        options={{
          title: "User Profile",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}
        name="userProfile" component={userProfile} />
        <Drawer.Screen
        options={{
          title: "LogOut",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}
        name="LogOut" component={LogOut} />

      {/* Profile page drawer navigator  */}
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}
        name="Profile" component={Profile} />


            {/* Validate page drawer navigator  */}
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }

        }}
        name="Validate" component={Validate} />

      {/* user profile page drawer navigator  */}
     

      {/*Emergency page*/}
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }

        }}
        name="Emergency" component={EmergencyCall} />

      {/* comments and feedback page */}
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }

        }}
        name="Feedback" component={Feedback} />
        {/* comments and feedback page */}
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }

        }}
        name="SaveElec" component={SaveElec} />
        
        <Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}
        name="MyWeb" component={MyWeb} />

<Drawer.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: '#3e92d1',
          }
        }}
        name="other" component={other} />

   
      {/* LogOut page */}
      

      <Drawer.Screen
        options={{
          title: ""
        }}
        name="Settings" component={Settings} />



      </Drawer.Navigator>

    
  );



};


export default HomeDrawer;


