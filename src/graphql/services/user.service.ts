import { GraphQLError } from "graphql";
import User from "../../models/User.js";
import { comparePassword, hashPassword } from "../../helpers/password.js";

export const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const signup = async (payload: any) => {
  const args = payload.content;
  const userExist = await User.findOne({
    where: {
      phone: args.phone,
    },
  });
  if (userExist) throw new GraphQLError("user aleady exists");
  const hash = await hashPassword(args.password);
  const newUser = await User.create({
    ...args,
    password: hash,
  });
  return newUser;
};

export const signin = async (payload: any) => {
  const args = payload.content;
  const userExist = await User.findOne({
    where: {
      phone: args.phone,
    },
  });

  if (!userExist) {
    throw new GraphQLError("incorrect credentials");
  } else {
    const isMatch = await comparePassword(
      args.password,
      userExist.dataValues.password
    );
    if (!isMatch) {
      throw new GraphQLError("incorrect credentials");
    } else {
      if (!isMatch) throw new GraphQLError("incorrect credentials");
      return userExist.dataValues;
    }
  }
};
