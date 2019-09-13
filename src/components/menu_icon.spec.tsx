import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { MenuIcon } from "./menu_icon";

describe("[component] MenuIcon", function() {
  it("should handle onPress", function() {
    const onPress = jest.fn();

    const { getByTestId } = render(<MenuIcon onPress={onPress} />);

    fireEvent.press(getByTestId("menu-icon"));

    expect(onPress).toHaveBeenCalled();
  });

  it("should match snapshot", function() {
    const { baseElement } = render(<MenuIcon />);

    expect(baseElement).toMatchSnapshot();
  });
});
