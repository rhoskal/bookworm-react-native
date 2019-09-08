import React from "react";
import { Text, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";

export function BookDetail({ navigation }: NavigationContainerProps) {
  const id = navigation && navigation.getParam("id", "");

  return id ? (
    <View>
      <Text>{`Details for book: ${id}`}</Text>
    </View>
  ) : (
    <View>
      <Text>Unable to find book</Text>
    </View>
  );
}
