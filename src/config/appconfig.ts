import dotenv from "dotenv";
dotenv.config();

const appConfig = {
  name: "e-commerce backend",
  port: process.env.PORT as unknown as number,
  env: "development",
  secret: process.env.JWT_SECRET,
  token_expiry: process.env.TOKEN_EXPIRY,
};

export default appConfig;
