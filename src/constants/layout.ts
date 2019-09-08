import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Layout = {
  cardRadius: 8,
  margin_xs: 5,
  margin_sm: 10,
  margin_md: 15,
  margin_lg: 20,
  margin_xl: 30,
  screen: {
    width,
    height,
  },
};
