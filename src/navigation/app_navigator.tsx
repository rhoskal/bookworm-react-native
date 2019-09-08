import React from "react";
import { Image, StyleSheet } from "react-native";
import { createAppContainer, NavigationContainerProps } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import CustomDrawer from "./custom_drawer";
import { MenuIcon } from "../components";
import { Colors, Layout } from "../constants";
import { BookDetail, BookList } from "../screens";
import { Icons } from "../../assets";

const BookStack = createStackNavigator(
  {
    book_list: {
      screen: BookList,
      navigationOptions: ({ navigation }: NavigationContainerProps) => ({
        headerBackTitle: null,
        headerLeft: (
          <MenuIcon onPress={() => navigation && navigation.toggleDrawer()} />
        ),
        headerStyle: {
          backgroundColor: Colors.white,
          borderBottomColor: Colors.white,
        },
        title: "Books",
      }),
    },
    book_detail: {
      screen: BookDetail,
      navigationOptions: () => ({
        headerBackImage: (
          <Image style={styles.icon} source={Icons.back_arrow} />
        ),
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: Colors.white,
          borderBottomColor: Colors.white,
        },
      }),
    },
  },
  {
    initialRouteName: "book_list",
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.iconSelected,
  },
});

const AppNavigator = createDrawerNavigator(
  {
    Books: { screen: BookStack },
  },
  {
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: Colors.tintColor,
      labelStyle: {
        // fontFamily: "Lato-Regular",
        fontSize: 16,
        color: Colors.secondary,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
