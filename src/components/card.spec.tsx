import React from "react";
import { render } from "@testing-library/react-native";

import { Card } from "./card";
import { Book } from "../types";

describe("[component] Card", function() {
  const book: Book = {
    id: "1",
    authors: "Ayn Rand",
    description: "This book is one of my top 5!",
    rating: 3,
    thumbnail: "https://thumbnail.jpg",
    title: "Atlas Shrugged",
  };

  it("should match snapshot", function() {
    const { baseElement } = render(<Card book={book} />);

    expect(baseElement).toMatchSnapshot();
  });
});
