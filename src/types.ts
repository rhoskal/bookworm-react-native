export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Book = {
   __typename?: 'Book',
  /** Combined authors of the book */
  authors: Scalars['String'],
  /** A short summary of the book */
  description?: Maybe<Scalars['String']>,
  /** Simple auto-increment database id */
  id: Scalars['ID'],
  /** A random rating between 0 and 5 */
  rating: Scalars['Int'],
  /** The uri for a thumbnail */
  thumbnail: Scalars['String'],
  /** The title of the book */
  title: Scalars['String'],
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  /** Get info about a book */
  book?: Maybe<Book>,
  /** List all books */
  books?: Maybe<Array<Maybe<Book>>>,
};


export type RootQueryTypeBookArgs = {
  id: Scalars['ID']
};
