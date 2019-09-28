import React from "react";
import { render } from "@testing-library/react-native";

import { Card } from "./card";
import { Book } from "../types";

describe("[component] Card", function() {
  it("should default to placeholder image if book has no thumbnail", function() {
    const book: Book = {
      id: "1",
      authors: "Ayn Rand",
      description: "This book is one of my top 5!",
      rating: 3,
      title: "Atlas Shrugged",
      thumbnail: "https://thumbnail.jpg",
    };

    const { getByTestId } = render(<Card book={book} />);

    expect(getByTestId("book-thumbnail")).toHaveProp("source", {
      uri: "https://thumbnail.jpg",
    });
  });

  it("should match snapshot", function() {
    const book: Book = {
      id: "1",
      authors: "Ayn Rand",
      description: "This book is one of my top 5!",
      rating: 3,
      thumbnail: "https://thumbnail.jpg",
      title: "Atlas Shrugged",
    };

    const { baseElement } = render(<Card book={book} />);

    expect(baseElement).toMatchSnapshot();
  });
});
