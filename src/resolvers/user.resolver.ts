import { getUsers } from "../services/user.service.js";

export const userResolver = {
  Query: {
    users: () => {
      return getUsers();
    },
  },
};
