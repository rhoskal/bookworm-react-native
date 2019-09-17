import React from "react";
import { render, wait, waitForElement } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/react-testing";
import { GraphQLError } from "graphql";

import { BookDetail, BOOK_QUERY } from "./book_detail";

describe("[routes] book_detail", function() {
  let mockBook;

  it("should handle loading state", function() {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BookDetail />
      </MockedProvider>,
    );

    getByText("Loading...");
  });

  it("should handle error", async function() {
    mockBook = {
      request: {
        query: BOOK_QUERY,
      },
      result: {
        errors: [new GraphQLError("Custom error!")],
      },
    };

    const { getByText } = render(
      <MockedProvider mocks={[mockBook]} addTypename={false}>
        <BookDetail />
      </MockedProvider>,
    );

    await waitForElement(() => getByText("GraphQL error: Custom error!"));
  });

  it("should match snapshot", async function() {
    mockBook = {
      request: {
        query: BOOK_QUERY,
        variables: {
          id: "1",
        },
      },
      result: {
        data: {
          book: {
            id: "1",
            authors: "Ayn Rand",
            description:
              "Peopled by larger-than-life heroes and villains, charged with towering \
                          questions of good and evil, Atlas Shrugged is Ayn Rand’s magnum opus: \
                          a philosophical revolution told in the form of an action \
                          thriller—nominated as one of America’s best-loved novels by PBS’s \
                          The Great American Read.",
            rating: 3,
            thumbnail: "https://images-na.ssl-image.jpg",
            title: "Atlas Shrugged",
          },
        },
      },
    };

    const withNav: any = {
      navigation: {
        getParam: jest.fn(),
        state: {
          params: { id: "1" },
        },
      },
    };

    const { baseElement } = render(
      <MockedProvider mocks={[mockBook]} addTypename={false}>
        <BookDetail {...withNav} />
      </MockedProvider>,
    );

    await wait(() => expect(baseElement).toMatchSnapshot());
  });
});
