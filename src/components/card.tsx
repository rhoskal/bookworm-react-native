import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Images } from "../../assets";
import { Colors, Layout } from "../constants";
import { Stars } from "./stars";
import { Book } from "../types";

type Props = {
  book: Book;
  onPress?: () => void;
};

export function Card({ book, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.thumbnailContainer}>
        <Image
          defaultSource={Images.placeholder}
          resizeMode="contain"
          source={{ uri: book.thumbnail }}
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.bookTitleText} numberOfLines={1}>
          {book.title}
        </Text>
        <Text style={styles.bookAuthorText} numberOfLines={1}>
          {book.authors}
        </Text>
      </View>
      <Stars rating={book.rating} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookAuthorText: {
    color: Colors.textLight,
    fontFamily: "Lato-Light",
    fontSize: 14,
    marginBottom: Layout.margin_sm,
  },
  bookTitleText: {
    color: Colors.textDark,
    fontFamily: "Lato-Bold",
    fontSize: 18,
    marginBottom: Layout.margin_sm,
  },
  container: {
    position: "relative",
    backgroundColor: Colors.white,
    height: 200,
    width: (Layout.screen.width - Layout.margin_md * 3) / 2,
    marginBottom: 100,
    padding: Layout.margin_md,
    borderRadius: Layout.cardRadius,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: Layout.cardRadius,
    elevation: 1,
  },
  infoContainer: {
    paddingTop: 90,
  },
  thumbnail: {
    position: "absolute",
    top: -100,
    width: 100,
    height: 200,
    borderRadius: 15,
  },
  thumbnailContainer: {
    alignItems: "center",
  },
});
