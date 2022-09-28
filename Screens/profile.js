import * as React from "react";
import { View, Image,Text, button, TextInput, StyleSheet,
  ScrollView,
  SafeAreaView, Dimensions} from "react-native";
import { Avatar } from 'react-native-paper';

const height_ = Dimensions.get("screen").height;
const width_ = Dimensions.get("screen").width;
export default function DetailsScreen({ navigation, route }) {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    var { contractor } = route.params;
    setData(contractor);
    // console.log(typeof(id[/'id']));
    console.log(data);
  }, [data]);

  return (
    <SafeAreaView style={{ flex: 1, height: height_ , backgroundColor: "#e6e6e6",}}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
    <View >
      {/* <View
        style={{
          height: height_ * 0.3,
          width: "100%",
          backgroundColor: "red", //top
          // opacity: "100%",
          // borderBottomLeftRadius: "90%",
          // borderBottomRightRadius: "90%",
        //   borderTopLeftRadius: "90%",
        //   borderTopRightRadius: "90%",
          // opacity: "50%"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "900",
            justifyContent: "center",
            top: 100,
            left: 55,
          }}
        >
          Verify contractors
        </Text>
      </View> */}
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "yellow",
          marginBottom: 20,
        }}
      ></Text>
      {/* <Image
                style={{
                    width: 51,
                    height: 51,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'data:image/png;base64,'
                }}
            /> */}

            {/* image avater */}
            {/* <Avatar.Image size={24} source={require('../assets/avatar.png')} /> */}

      {/* <TextInput style={styles.topDiv} value="" /> */}

      {/* <TextInput style={styles.profImg} /> */}

      
      {/* <TextInput
        value={data?.surname}
        placeholder="Surname"
        style={styles.textBoxes}
      /> */}
      <TextInput
        value={data?.fullname}
        placeholder="Names"
        style={styles.textBoxes}
      />
      <TextInput
        value={data?.occupation}
        placeholder="occupation"
        style={styles.textBoxes}
      />
      <TextInput
        value={data?.employer}
        placeholder="Employer"
        style={styles.textBoxes}
      />
      <TextInput
        value={data?.region}
        placeholder="Region"
        style={styles.textBoxes}
      />

    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "green",
    // paddingTop: 50,
  },
  textBoxes: {
    // width: "90%",
    width: width_ * 0.99,
    fontSize: 18,
    padding: 12,
    borderColor: "goldenrod",
    borderWidth: 0.2,
    borderRadius: 25,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "seashell",
    fontSize: 20,
      borderWidth: 1.2,
      borderRadius: 13,
      alignItems: "center"
  },
 
  // profImg: {
  //   height: 190,
  //   width: "60%",
  //   backgroundColor: "seashell",
  //   borderColor: "#FED000",
  //   borderWidth: 1,
  //   position: "relative",
  //   left: 5,
  //   borderRadius: 500,
  //   marginTop: -490,
  //   // position: 'relative',
  //   marginBottom: 25,
  // },
  // veiw: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#e6e6e6"
  // },
  // topDiv: {
  //   height: height_ * 0.99,
  //   width: "100%",
  //   // backgroundColor: '#fff',
  //   // backgroundColor: 'rgba(3, 0, 111, 0.8)',
  //   // borderWidth: 1,
  //   position: "relative",
  //   top: 0,
  // },
});