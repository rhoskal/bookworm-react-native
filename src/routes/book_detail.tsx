import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { Error, Loading, Stars } from "../components";
import { Colors, Layout } from "../constants";
import { Book } from "../types";
import { Images } from "../../assets";

export const BOOK_FRAGMENT = gql`
  fragment BookDetail on Book {
    id
    authors
    description
    rating
    thumbnail
    title
  }
`;

export const BOOK_QUERY = gql`
  query bookDetail($id: ID!) {
    book(id: $id) {
      id
      ...BookDetail
    }
  }
  ${BOOK_FRAGMENT}
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
    textAlign: "justify",
    lineHeight: 25,
    marginTop: Layout.margin_sm,
  },
  bookTitleText: {
    color: Colors.textDark,
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginBottom: Layout.margin_sm,
  },
  card: {
    position: "relative",
    backgroundColor: Colors.white,
    height: Layout.screen.height * 0.5,
    marginHorizontal: Layout.margin_xl,
    padding: Layout.margin_lg,
    borderRadius: Layout.cardRadius,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: Layout.cardRadius,
    elevation: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.iconSelected,
  },
  infoContainer: {
    paddingTop: 150,
  },
  thumbnail: {
    position: "absolute",
    top: -150,
    width: 200,
    height: 300,
    borderRadius: 15,
  },
});
