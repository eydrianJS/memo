const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        password: String
        createdWords: [Word!]
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type Word {
        _id: ID!
        polishWord: String!
        englishWord: String!
        quantityToUse: Int!
        level: String!
        creator: User!
    }

    input WordInput {
        polishWord: String!
        englishWord: String!
        quantityToUse: Int!
        level: String! 
    }

    input UserInput {
        email: String!
        password: String
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        words: [Word!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        createWord(wordInput: WordInput): Word
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);