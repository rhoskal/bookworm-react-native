import React from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createDrawerNavigator,
  NavigationDrawerOptions,
} from "react-navigation-drawer";
import {
  createStackNavigator,
  NavigationStackOptions,
} from "react-navigation-stack";

import CustomDrawer from "./custom_drawer";
import { MenuIcon } from "../components";
import { Colors, Layout } from "../constants";
import { BookDetail, BookList } from "../routes";
import { Icons } from "../../assets";

const BookStack = createStackNavigator(
  {
    book_list: {
      screen: BookList,
      navigationOptions: function({ navigation }): NavigationStackOptions {
        return {
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
            color: Colors.text_dark,
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
        };
      },
    },
    book_detail: {
      screen: BookDetail,
      navigationOptions: function(): NavigationStackOptions {
        return {
          headerBackImage: function customBackImage() {
            return (
              <Image style={styles.icon_arrow} source={Icons.back_arrow} />
            );
          },
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
        };
      },
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
    tintColor: Colors.icon_selected,
  },
});

const AppNavigator = createDrawerNavigator(
  {
    Books: {
      screen: BookStack,
      navigationOptions: function(): NavigationDrawerOptions {
        return {
          drawerIcon: function customDrawerIcon({ focused }) {
            return (
              <Image
                source={Icons.book}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused
                    ? Colors.icon_selected
                    : Colors.icon_default,
                }}
              />
            );
          },
        };
      },
    },
  },
  {
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: Colors.tint_color,
      labelStyle: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: Colors.secondary,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
