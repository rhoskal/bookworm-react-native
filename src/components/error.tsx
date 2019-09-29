import React from "react";
import { Text } from "react-native";

type Props = {
  message?: string;
} & typeof defaultProps;

const defaultProps = {
  message: "Ah ah ah, you didn't say the magic word.",
};

export function Error({ message }: Props) {
  return <Text>{message}</Text>;
}

Error.defaultProps = defaultProps;
