import React from "react";
import { render } from "@testing-library/react-native";

import App from "./app";

describe("App", function() {
  jest.useFakeTimers();

  it("smoke test", async function() {
    const { getByTestId } = render(<App />);

    getByTestId("splash");
  });
});
