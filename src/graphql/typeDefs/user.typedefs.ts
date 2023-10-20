export const userTypeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    phone: String!
    email: String
    role: String!
  }

  input UserSignupContent {
    name: String!,
    phone: String!,
    password: String!
    email: String, 
    role: String!
  }

  input UserSigninContent {
    phone: String!,
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    signup(content: UserSignupContent): User
    signin(content: UserSigninContent): User
}
`;
