import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Colors, Layout } from "../constants";
import { Icons } from "../../assets";

type Props = {
  onPress?: () => void;
};

export function MenuIcon({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} testID="menu-icon">
      <Image style={styles.menuIcon} source={Icons.nav_menu} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    width: 23,
    height: 23,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.iconSelected,
  },
});
