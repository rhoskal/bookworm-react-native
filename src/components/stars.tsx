import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { Icons } from "../../assets";

type Props = {
  rating: number;
};

export function Stars({ rating }: Props) {
  let stars = [];

  for (let idx = 0; idx < 5; idx++) {
    stars.push(
      <Image
        key={idx}
        source={Icons.star}
        style={{
          width: 18,
          height: 18,
          tintColor: idx < rating ? "#f4ca67" : "#dbdbdb",
          marginLeft: idx > 0 ? 1.5 : 0,
        }}
      />,
    );
  }

  return <View style={styles.container}>{stars}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
