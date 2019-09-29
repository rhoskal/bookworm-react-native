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
    <View style={styles.container} testID="splash">
      <Image resizeMode="contain" source={Images.logo} style={styles.logo} />
      <Text style={styles.displayName}>{displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  displayName: {
    color: Colors.white,
    fontFamily: "Lato-Bold",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 240,
    width: 90,
  },
});
