import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  DrawerNavigatorItems,
  DrawerContentComponentProps,
} from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";

import { Layout } from "../constants";
import { Images } from "../../assets";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  return (
    <SafeAreaView
      forceInset={{ top: "always", horizontal: "never" }}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" source={Images.logo} style={styles.logo} />
      </View>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 59,
    height: 156,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Layout.margin_md,
  },
});
