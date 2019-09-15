import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Stars } from "./stars";
import { Colors, Layout } from "../constants";
import { Book } from "../types";
import { Images } from "../../assets";

type Props = {
  book: Book;
  onPress?: () => void;
};

export function Card({ book, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.thumbnailContainer}>
        <Image
          defaultSource={Images.placeholder}
          resizeMode="contain"
          source={{ uri: book.thumbnail ? book.thumbnail : Images.placeholder }}
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
  card: {
    backgroundColor: Colors.white,
    borderRadius: Layout.cardRadius,
    height: 200,
    marginBottom: 100,
    padding: Layout.margin_md,
    position: "relative",
    width: (Layout.screen.width - Layout.margin_md * 3) / 2,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: {
          height: 7,
          width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: Layout.cardRadius,
      },
    }),
  },
  infoContainer: {
    paddingTop: 90,
  },
  thumbnail: {
    borderRadius: 15,
    height: 200,
    overflow: "hidden",
    position: "absolute",
    top: -100,
    width: 100,
  },
  thumbnailContainer: {
    alignItems: "center",
  },
});
