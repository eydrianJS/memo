const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        password: String
        createdWords: [Word!]
        scores: [Score!]
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

    type Score {
        _id: ID!
        gameSize: Int!
        level: String!
        time: String!
        championer: User!
    }

    input ScoreInput {
        gameSize: Int!
        level: String!
        time: String!
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
        scores: [Score!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        createWord(wordInput: WordInput): Word
        createScore(scoreInput: ScoreInput): Score
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);