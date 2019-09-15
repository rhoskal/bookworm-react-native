import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Error, Loading, Stars } from "../components";
import { Colors, Layout } from "../constants";
import { Book } from "../types";
import { Images } from "../../assets";

export const BOOK_QUERY = gql`
  query bookDetail($id: ID!) {
    book(id: $id) {
      id
      authors
      description
      rating
      thumbnail
      title
    }
  }
`;

export function BookDetail({ navigation }: NavigationContainerProps) {
  const id: string = navigation && navigation.getParam("id", "");

  const { data, error, loading } = useQuery(BOOK_QUERY, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const book: Book = data.book;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          defaultSource={Images.placeholder}
          resizeMode="contain"
          source={{ uri: book.thumbnail || "WHY????" }}
          style={styles.thumbnail}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.bookTitleText} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.bookAuthorText} numberOfLines={1}>
            {book.authors}
          </Text>
          <Stars rating={book.rating} />
          <Text style={styles.bookDescriptionText} numberOfLines={4}>
            {book.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookAuthorText: {
    color: Colors.textLight,
    fontFamily: "Lato-Light",
    fontSize: 14,
    marginBottom: Layout.margin_sm,
  },
  bookDescriptionText: {
    color: Colors.textMedium,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    lineHeight: 25,
    marginTop: Layout.margin_sm,
    textAlign: "justify",
  },
  bookTitleText: {
    color: Colors.textDark,
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginBottom: Layout.margin_sm,
  },
  card: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Layout.cardRadius,
    height: Layout.screen.height * 0.5,
    marginHorizontal: Layout.margin_xl,
    padding: Layout.margin_lg,
    position: "relative",
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
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.iconSelected,
  },
  infoContainer: {
    paddingTop: 150,
  },
  thumbnail: {
    borderRadius: 15,
    height: 300,
    overflow: "hidden",
    position: "absolute",
    top: -150,
    width: 200,
  },
});
