import { getUsers, signin, signup } from "../services/user.service.js";

export const userResolver = {
  Query: {
    users: () => {
      return getUsers();
    },
  },
  Mutation: {
    signup: (_: any, args: any) => {
      return signup(args);
    },
    signin: (_: any, args: any) => {
      return signin(args);
    },
  },
};
