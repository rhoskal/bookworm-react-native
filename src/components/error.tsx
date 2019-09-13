import React from "react";
import { Text } from "react-native";

type Props = {
  message?: string;
};

export function Error({ message }: Props) {
  return message ? <Text>{message}</Text> : <Text>Error :(</Text>;
}
