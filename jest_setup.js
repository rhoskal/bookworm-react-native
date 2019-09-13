import { View as mockView } from "react-native";
import "@testing-library/jest-native";

// there's a __mock__ for it :)
jest
  .mock("NativeEventEmitter", () => {
    return class NativeEventEmitter {
      addListener() {}
      removeAllListeners() {}
      removeSubscription() {}
    };
  })
  // https://github.com/kmagiera/react-native-gesture-handler/issues/344#issuecomment-470191728
  .mock("NativeModules", () => ({
    KeyboardObserver: {},
    PlatformConstants: {
      forceTouchAvailable: false,
    },
    RNGestureHandlerModule: {
      attachGestureHandler: jest.fn(),
      createGestureHandler: jest.fn(),
      dropGestureHandler: jest.fn(),
      updateGestureHandler: jest.fn(),
      State: {},
      Directions: {},
    },
    UIManager: {
      RCTView: () => ({
        directEventTypes: {},
      }),
    },
  }))
  .mock("react-native-reanimated", () => {
    return {
      Value: jest.fn(),
      event: jest.fn(),
      add: jest.fn(),
      eq: jest.fn(),
      set: jest.fn(),
      cond: jest.fn(),
      interpolate: jest.fn(),
      View: mockView,
      Extrapolate: { CLAMP: jest.fn() },
      Clock: jest.fn(),
      greaterThan: jest.fn(),
      lessThan: jest.fn(),
      startClock: jest.fn(),
      stopClock: jest.fn(),
      clockRunning: jest.fn(),
      not: jest.fn(),
      or: jest.fn(),
      and: jest.fn(),
      spring: jest.fn(),
      decay: jest.fn(),
      defined: jest.fn(),
      call: jest.fn(),
      Code: mockView,
      block: jest.fn(),
      abs: jest.fn(),
      greaterOrEq: jest.fn(),
      lessOrEq: jest.fn(),
      debug: jest.fn(),
      Transition: {
        Out: "Out",
      },
    };
  })
  .mock("ScrollView", () => require.requireMock("ScrollViewMock"))
  .mock("StatusBar", () => {
    return {
      DEFAULT_BACKGROUND_COLOR: "black",
      setHidden: jest.fn(),
    };
  });
