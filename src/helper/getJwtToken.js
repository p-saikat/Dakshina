import jwt from "jsonwebtoken";
import { envs } from "../config/index.js";

export const getJwtToken = async (key) => {
  const token = jwt.sign(key, envs.jwt.accessToken.secret, {
    expiresIn: envs.jwt.accessToken.expiry,
  });

  return {
    token: token,
    expiry: envs.jwt.accessToken.expiry,
  };
};
