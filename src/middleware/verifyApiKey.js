import { StatusError, envs } from "../config/index.js";

/**
 * verify API key
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const verifyApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== envs.apiKey) {
      throw StatusError.forbidden("");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
