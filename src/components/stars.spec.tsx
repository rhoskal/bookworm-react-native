import React from "react";
import { render } from "@testing-library/react-native";

import { Stars } from "./stars";

describe("[component] Stars", function() {
  it("should match snapshot", function() {
    const { baseElement } = render(<Stars rating={5} />);

    expect(baseElement).toMatchSnapshot();
  });
});
