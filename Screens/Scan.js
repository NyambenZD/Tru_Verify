import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { WebView } from "react-native-webview";

function Scanner({ state, setState }) {
  const [hasPermission, setHaPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHaPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData:" + data);
  };

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  console.log(validURL(text));

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting For Camera Permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.appContainer}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return state ? (
    <View style={styles.appContainer}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Scan again"}
          onPress={() => {
            setScanned(false), setText("Not Scanned");
          }}
          color="tomato"
        />
      )}
    </View>
  ) : (
    <></>
  );
}

export default Scanner;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.99,
    overflow: "hidden",
  },

  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 410,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#FED000",
  },

  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
