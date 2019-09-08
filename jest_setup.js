import { View as mockView } from "react-native";
import "@testing-library/jest-native";

// https://github.com/kmagiera/react-native-gesture-handler/issues/344#issuecomment-470191728
jest.mock("NativeModules", () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {},
    }),
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}));

jest.mock("NativeEventEmitter", () => {
  class NativeEventEmitter {
    addListener() {}
    removeAllListeners() {}
    removeSubscription() {}
  }

  return NativeEventEmitter;
});

jest.mock("react-native-reanimated", () => {
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
});

jest.mock("StatusBar", () => {
  return {
    DEFAULT_BACKGROUND_COLOR: "black",
    setHidden: jest.fn(),
  };
});

// do this... src/utils/testing?
// https://www.native-testing-library.com/docs/setup#configuring-jest-with-test-utils
