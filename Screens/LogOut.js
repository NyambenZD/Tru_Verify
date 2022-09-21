import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  // FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';
const {width} = Dimensions.get('screen');


const LogOut= ({navigation}) => {

  return (
    <SafeAreaView style={{backgroundColor: 'white' , flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={true}>
      <TouchableOpacity onPress={() => navigation.navigate("signin") }>
            <View style={style.signIn}>
              <Text style={style.textSign}>LogOut</Text>
            </View>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textSign: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
  },

});
export default LogOut;
