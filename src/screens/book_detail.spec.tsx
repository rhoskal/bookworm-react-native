import React from "react";
import { render } from "@testing-library/react-native";

import { BookDetail } from "./book_detail";

describe("[Screen] book_detail", function() {
  it("should match snapshot", function() {
    const { baseElement } = render(<BookDetail />);

    expect(baseElement).toMatchSnapshot();
  });
});
