import React from "react";
import { render } from "@testing-library/react-native";

import { BookList } from "./book_list";

describe("[Screen] book_list", function() {
  it("should match snapshot", function() {
    const { baseElement } = render(<BookList />);

    expect(baseElement).toMatchSnapshot();
  });
});
