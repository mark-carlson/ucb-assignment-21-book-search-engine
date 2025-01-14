const { gql } = require('apollo-server-express');


// below definitions of each variable are guesses based on description -- image definition inside book should be revisited
const typeDefs = gql` 
    type User {
        _id: ID
        name: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: [String]
        link: String
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
      }
    
    type Auth {
        token: String
        user: [User]
    }

    type Query {
        me: User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;
