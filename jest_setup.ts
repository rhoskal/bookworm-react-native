import "@testing-library/jest-native/extend-expect";
import "@testing-library/react-native/cleanup-after-each";

jest
  .mock("react-navigation", function() {
    return {
      createAppContainer: jest.fn()
    }
  })
  .mock("react-native-gesture-handler", function() {
    return {
      RNGestureHandlerModule: {
        Directions: {},
      },
    }
  })
  .mock("react-native-screens", function() {
    return {
      create: jest.fn()
    }
  })
  .mock("react-navigation-drawer", function() {
    return {
      create: jest.fn(),
      createDrawerNavigator: jest.fn()
    }
  })
  .mock("react-navigation-stack", function() {
    return {
      create: jest.fn(),
      createStackNavigator: jest.fn()
    }
  });
