import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash.get";

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

interface QueryData {
  book: Book;
}

interface QueryVars {
  id: string;
}

export function BookDetail({ navigation }: NavigationContainerProps) {
  const { data, error, loading } = useQuery<QueryData, QueryVars>(BOOK_QUERY, {
    variables: { id: get(navigation, "state.params.id", "") },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error message={error.message} />;
  } else {
    const book = get(data, "book", null);

    return book ? (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            defaultSource={Images.placeholder}
            resizeMode="contain"
            source={{ uri: book.thumbnail || Images.placeholder }}
            style={styles.thumbnail}
          />
          <View>
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
    ) : null;
  }
}

const styles = StyleSheet.create({
  bookAuthorText: {
    color: Colors.text_light,
    fontFamily: "Lato-Light",
    fontSize: 14,
    marginBottom: Layout.margin_sm,
  },
  bookDescriptionText: {
    color: Colors.text_medium,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    lineHeight: 25,
    marginTop: Layout.margin_sm,
    textAlign: "justify",
  },
  bookTitleText: {
    color: Colors.text_dark,
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginVertical: Layout.margin_sm,
  },
  card: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: Layout.card_radius,
    marginHorizontal: Layout.margin_xl,
    padding: Layout.margin_lg,
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
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Layout.margin_lg,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.icon_selected,
  },
  thumbnail: {
    borderRadius: 15,
    height: 300,
    width: 200,
  },
});
