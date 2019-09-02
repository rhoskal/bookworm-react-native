import React from "react";
import { render } from "@testing-library/react-native";

import App from "./App";

describe("App", function() {
  it("finds text", function() {
    const { getByText } = render(<App />);

    getByText("Hello World");
  });

  it("matches snapshot", function() {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
