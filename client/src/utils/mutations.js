import { gql } from '@apollo/client';
// check mutation logics with Jehyun


export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            _id
            name
            email
            bookCount
            savedBooks
        }
    }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID) {
        removeBook(bookId: $bookId) {
            _id
        }
    }
`;
