import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

import { Images } from "../../assets";
import { displayName } from "../../app.json";
import { Colors } from "../constants";

export function Splash() {
  React.useEffect(() => {
    StatusBar.setHidden(true);

    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
      <Text style={styles.displayName}>{displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  displayName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 90,
    height: 240,
  },
});
