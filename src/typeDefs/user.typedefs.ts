export const userTypeDefs = `#graphql
  type User {
    name: String
    phone: String
    email: String
    role: String
  }

  type Query {
    users: [User]
  }
`;
