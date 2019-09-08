import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";

import { Images } from "../../assets";
import { Layout } from "../constants";

export default function CustomDrawerContent(props: any) {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
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
