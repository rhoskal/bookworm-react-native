import React from "react";
import { render } from "@testing-library/react-native";

import { Loading } from "./loading";

describe("[component] Loading", function() {
  it("should match snapshot", function() {
    const { baseElement } = render(<Loading />);

    expect(baseElement).toMatchSnapshot();
  });
});
