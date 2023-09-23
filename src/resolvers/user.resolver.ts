import { createUser, getUsers } from "../services/user.service.js";

export const userResolver = {
  Query: {
    users: () => {
      return getUsers();
    },
  },
  Mutation: {
    createUser: (_, args) => {
      return createUser(args);
    },
  },
};
