//import { Slide } from 'native-base';
import React, { useState } from "react";
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
const { width } = Dimensions.get("screen");
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

  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <Pressable
            onPress={() => handleOptionCard(index)}
            style={style.optionsCard}
            key={index}
          >
            {/* Validation image */}
            <Image source={option.img} style={style.optionsCardImage} />

            {/* Title */}
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
              {option.title}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* Header container */}
      <View style={style.header}></View>
      <ScrollView showsVerticalScrollIndicator={true}>
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

        {/*  */}
        <ListOptions />
        <ListCategories />
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
    backgroundColor: "white",
    backgroundColor: "white",
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
    backgroundColor: "white",
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
    backgroundColor: "white",
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
});
export default Home;
