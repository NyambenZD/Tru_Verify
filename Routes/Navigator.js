import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import Splash from "../Screens/Splash";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Home from "../Screens/main";
import MyStack from "./auth";
import HomeDrawer from "../Screens/homeDrawer";
import CONTEXT from "./context";


const Navigation = () => {
  const { USER, SETUSER } = useContext(CONTEXT);


  if( USER ) {
    return (
      <HomeDrawer />
    );
  }
  else {
    return (
      // contains routes for login and sign in.
      <MyStack />
    );
  }
}


export default Navigation;