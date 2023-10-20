import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  // console.log(plainPassword);
  // console.log(hashedPassword);

  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};
