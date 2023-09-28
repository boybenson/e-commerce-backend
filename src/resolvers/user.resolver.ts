import { getUsers, signup } from "../services/user.service.js";

export const userResolver = {
  Query: {
    users: () => {
      return getUsers();
    },
  },
  Mutation: {
    signup: (_, args) => {
      return signup(args);
    },
  },
};
