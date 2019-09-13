import React from "react";
import { render } from "@testing-library/react-native";

import { Error } from "./error";

describe("[component] Error", function() {
  it("should handle custom error message", function() {
    let errorMsg: string = "This is a test message!";

    const { getByText } = render(<Error message={errorMsg} />);

    getByText(errorMsg);
  });

  it("should match snapshot", function() {
    const { baseElement } = render(<Error />);

    expect(baseElement).toMatchSnapshot();
  });
});
