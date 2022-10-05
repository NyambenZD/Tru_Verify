//import { Slide } from 'native-base';
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  // FlatList,
  Dimensions,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
// import AboutUs from './Settings';
import userProfile from "../Screens/userProfile";
const { width, height } = Dimensions.get("screen");
const Home = ({ navigation }) => {
  const [showOpt, setShowOpt] = useState(false);
  const [option, setOption] = useState({});

  // when user presses the option card.
  const handleOptionCard = (id) => {
    let option = optionsList.filter((v, k) => k == id);
    console.log(option);
    setOption((prev) => (prev = option[0]));
    navigation.navigate(option[0]?.url);

    // navigation.navigate("");
    // setShowOpt( prev => prev = true );
  };

  const optionsList = [
    {
      title: "Validation",
      img: require("../assets/valid.webp"),
      url: "Validate",
    },
    {
      title: "Emergency",
      img: require("../assets/emer.webp"),
      url: "Emergency",
    },
    {
      title: "Feedback",
      img: require("../assets/feedback.jpg"),
      url: "Feedback",
    },
    {
      title: "Save Electricity",
      img: require("../assets/save.jpg"),
      url: "SaveElec",
    },
    {
      title: "Load shedding updates",
      img: require("../assets/images.jpg"),
      url: "MyWeb",
    },
    { title: "contacts", img: require("../assets/people.jpg"), url: "other" },
  ];
  const categoryList = [];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        <StatusBar barStyle="dark-content" />
        {categoryList.map((category, index) => (
          <Text
            style={[
              style.categoryListText,
              index == selectedCategoryIndex && style.activeCategoryListText,
            ]}
          >
            {category}
          </Text>
        ))}
      </View>
    );
  };

  // const ListOptions = () => {
  //   return (
  //     <View style={style.optionListsContainer}>
  //       {optionsList.map((option, index) => (
  //         <Pressable
  //           onPress={() => handleOptionCard(index)}
  //           style={style.optionsCard}
  //           key={index}
  //         >
  //           {/* Validation image */}
  //           <Image source={option.img} style={style.optionsCardImage} />

  //           {/* Title */}
  //           <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
  //             {option.title}
  //           </Text>
  //         </Pressable>
  //       ))}
  //     </View>
  //   );
  // };
  
  
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={style.header}></View>
      {/* <ScrollView showsVerticalScrollIndicator={true}>
        <Modal visible={showOpt} animationType="Slide">
          <View style={style.modalContainer}>
            <View style={style.modalContent}>
              <View>
                <Text
                  style={{ fontSize: 30 }}
                  onPress={() => setShowOpt(false)}
                >
                  Back
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 30 }}>{option?.title}</Text>
              </View>
            </View>
          </View>
        </Modal>

   
        <ListOptions />
        <ListCategories />
      </ScrollView> */}
      <ScrollView style={style.container}
        contentContainerStyle={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
        }}
      >
        
        <View style={style.side}>
          <TouchableOpacity style={style.size1}
             onPress={() => handleOptionCard(0)}>
            <Text style={style.Txt} >Validate</Text>
            <Image source={require('../assets/valid.webp')} style={style.optionsCardImage1} />
            <View />

          </TouchableOpacity>


          <TouchableOpacity style={style.size2}
            onPress={() => handleOptionCard(1)}>
              <Text style={style.Txt}>Emergency</Text>
              <Image source={require('../assets/emer.webp')} style={style.optionsCardImage2} />
          </TouchableOpacity>


          <TouchableOpacity style={style.size3}
           onPress={() => handleOptionCard(2)}>
              <Text style={style.Txt}>Feedback</Text>
              <Image source={require('../assets/feedback.jpg')} style={style.optionsCardImage3} />
          </TouchableOpacity>

        </View>

        <View style={style.side}>
        <TouchableOpacity style={style.size2}
          onPress={() => handleOptionCard(3)}>
              <Text style={style.Txt}>Save Electricity</Text>
              <Image source={require('../assets/save.jpg')} style={style.optionsCardImage2} />
          </TouchableOpacity>

          
          <TouchableOpacity style={style.size5}
            onPress={() => handleOptionCard(4)}>
              <Text style={style.Txt}>Load shedding updates</Text>
              <Image source={require('../assets/images.jpg')} style={style.optionsCardImage1} />
          </TouchableOpacity>


          <TouchableOpacity style={style.size4}
            onPress={() => handleOptionCard(5)}>
              <Text style={style.Txt}>contacts</Text>
              <Image source={require('../assets/people.jpg')} style={style.optionsCardImage2} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    // light shade of blue #ecf4fa
    borderRadius: 20,
    paddingTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  optionListsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    padding: 10,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: "grey",
  },
  activeCategoryListText: {
    color: "yellow",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: "#fff",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: "grey" },

  // modal  css her
  modalContainer: {
    // backgroundColor: "yellow",
  },
  modalContent: {
    // backgroundColor: "blue",
  },

  container:{
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    margin: 10,
  },
  side:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    width: width * 0.5,
  },
  size1:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    height: height / 3,
  },
  size2:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    height: height / 4,
  },
  size3:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    height: height / 5,
  },
  size4:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    height: height / 1.5,
  },
  size5:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    height: height / 2.88,
  },
  optionsCardImage1: {
    // borderRadius: 10,
    height: height / 3.19,
    width: width / 2.16,
    borderRadius: 10,
    
  },
  optionsCardImage2: {
    borderRadius: 10,
    height: height / 4.4,
    width: width / 2.16,
  },
  optionsCardImage3: {
    borderRadius: 10,
    height: height / 5.95,
    width: width / 2.16,
  },
  Txt:{
    fontSize: 16,
    color: '#3e92d1',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: "bold",
  }

});
export default Home;
