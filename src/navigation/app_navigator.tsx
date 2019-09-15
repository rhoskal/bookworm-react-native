import React from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { createAppContainer, NavigationScreenProps } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import CustomDrawer from "./custom_drawer";
import { MenuIcon } from "../components";
import { Colors, Layout } from "../constants";
import { BookDetail, BookList } from "../routes";
import { Icons } from "../../assets";

const BookStack = createStackNavigator(
  {
    book_list: {
      screen: BookList,
      navigationOptions: ({ navigation }: NavigationScreenProps): any => ({
        headerBackTitle: null,
        headerLeft: (
          <MenuIcon onPress={() => navigation && navigation.toggleDrawer()} />
        ),
        headerStyle: {
          ...Platform.select({
            android: {
              elevation: 0,
            },
            ios: {
              borderBottomWidth: 0,
            },
          }),
        },
        headerTitle: "Books",
        headerTitleStyle: {
          color: Colors.textDark,
          fontFamily: "Lato-Bold",
          fontSize: 20,
          ...Platform.select({
            android: {
              flex: 1,
              textAlign: "center",
            },
          }),
        },
        headerTitleContainerStyle: {
          ...Platform.select({
            android: {
              left: Layout.margin_lg,
            },
          }),
        },
      }),
    },
    book_detail: {
      screen: BookDetail,
      navigationOptions: (): any => ({
        headerBackImage: (
          <Image style={styles.icon_arrow} source={Icons.back_arrow} />
        ),
        headerBackTitle: null,
        headerStyle: {
          ...Platform.select({
            android: {
              elevation: 0,
            },
            ios: {
              borderBottomWidth: 0,
            },
          }),
        },
      }),
    },
  },
  {
    initialRouteName: "book_list",
  },
);

const styles = StyleSheet.create({
  icon_arrow: {
    height: 25,
    width: 25,
    marginLeft: Layout.margin_lg,
    resizeMode: "contain",
    tintColor: Colors.iconSelected,
  },
});

// https://reactnavigation.org/docs/en/drawer-navigator.html#drawericon
type DrawerIconProps = {
  focused: boolean;
  tintColor: string;
};

const AppNavigator = createDrawerNavigator(
  {
    Books: {
      screen: BookStack,
      navigationOptions: () => ({
        drawerIcon: ({ focused }: DrawerIconProps) => (
          <Image
            source={Icons.book}
            style={{
              width: 22,
              height: 22,
              tintColor: focused ? Colors.iconSelected : Colors.iconDefault,
            }}
          />
        ),
      }),
    },
  },
  {
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: Colors.tintColor,
      labelStyle: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: Colors.secondary,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
