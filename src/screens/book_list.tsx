import React from "react";
import { Text, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";

export function BookList({ navigation }: NavigationContainerProps) {
  return (
    <View>
      <Text
        onPress={() =>
          navigation &&
          navigation.navigate({
            routeName: "book_detail",
            params: { id: 1 },
          })
        }>
        Book 1
      </Text>
      <Text
        onPress={() =>
          navigation &&
          navigation.navigate({
            routeName: "book_detail",
            params: { id: 2 },
          })
        }>
        Book 2
      </Text>
    </View>
  );
}
