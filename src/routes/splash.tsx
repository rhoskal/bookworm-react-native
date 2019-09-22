import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants";
import { displayName } from "../../app.json";
import { Images } from "../../assets";

export function Splash() {
  React.useEffect(() => {
    StatusBar.setHidden(true);

    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={Images.logo} style={styles.logo} />
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
    color: Colors.white,
    fontFamily: "Lato-Bold",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 90,
    height: 240,
  },
});
