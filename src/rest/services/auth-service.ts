import { Request, Response } from "express";
import User from "../../models/User.js";
import { comparePassword } from "../../helpers/password.js";

export const signIn = async (req: Request, res: Response) => {
  const args = req.body;

  const userExist = await User.findOne({
    where: {
      phone: args.phone,
    },
  });

  if (!userExist) {
    throw new Error("incorrect credentials");
  } else {
    const isMatch = await comparePassword(
      args.password,
      userExist.dataValues.password
    );

    if (!isMatch) {
      throw new Error("incorrect credentials");
    } else {
      res.status(200).json({
        message: "login was successful",
        data: {
          ...userExist.dataValues,
        },
      });
    }
  }
};
