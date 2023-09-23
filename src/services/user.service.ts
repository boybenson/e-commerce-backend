import User from "../models/user.js";

export const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const createUser = async (args: any) => {
  const newUser = await User.create({
    email: "ben63@gmail.com",
    name: "Be63",
    phone: "0546949335",
    role: "customer",
    password: "testpassword",
  });
};
