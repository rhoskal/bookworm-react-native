import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash.get";

import { Card, Error, Loading } from "../components";
import { Colors, Layout } from "../constants";
import { Book } from "../types";

export const BOOKS_QUERY = gql`
  query bookList {
    books {
      id
      authors
      rating
      thumbnail
      title
    }
  }
`;

type Props = {
  navigation: NavigationScreenProp<{}>;
};

interface QueryData {
  books: Book[];
}

export function BookList({ navigation }: Props) {
  const { data, error, loading } = useQuery<QueryData>(BOOKS_QUERY);

  function _keyExtractor(item: Book): string {
    return item.id;
  }

  function _renderItem({ item }: { item: Book }) {
    return (
      <Card
        key={item.id}
        book={item}
        onPress={() =>
          navigation &&
          navigation.navigate({
            routeName: "book_detail",
            params: { id: item.id },
          })
        }
      />
    );
  }

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error message={error.message} />;
  } else {
    const books = get(data, "books", []);

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.columnWrapper}
          columnWrapperStyle={styles.multiColumns}
          data={books}
          initialNumToRender={6}
          keyExtractor={_keyExtractor}
          numColumns={2}
          renderItem={_renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnWrapper: {
    paddingTop: Layout.margin_md,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    padding: Layout.margin_lg,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  menuIcon: {
    height: 23,
    width: 23,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.icon_selected,
  },
  multiColumns: {
    justifyContent: "space-evenly",
  },
});
