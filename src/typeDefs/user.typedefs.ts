export const userTypeDefs = `#graphql
  type User {
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

  type Query {
    users: [User]
  }

  type Mutation {
    signup(content: UserSignupContent): User
}
`;
