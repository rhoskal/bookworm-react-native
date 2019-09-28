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
          resizeMode="cover"
          source={{ uri: book.thumbnail }}
          style={styles.thumbnail}
          testID="book-thumbnail"
        />
      </View>
      <View>
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
    color: Colors.text_light,
    fontFamily: "Lato-Light",
    fontSize: 14,
    marginBottom: Layout.margin_sm,
  },
  bookTitleText: {
    color: Colors.text_dark,
    fontFamily: "Lato-Bold",
    fontSize: 18,
    marginBottom: Layout.margin_sm,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Layout.card_radius,
    marginBottom: Layout.margin_xl,
    padding: Layout.margin_md,
    width: (Layout.screen.width - Layout.margin_md * 3) / 2,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: Colors.shadow,
        shadowOffset: {
          height: 7,
          width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: Layout.card_radius,
      },
    }),
  },
  thumbnail: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  thumbnailContainer: {
    alignSelf: "center",
    height: 175,
    paddingBottom: Layout.margin_sm,
    width: 115,
  },
});
