import { StatusError } from "../config/index.js";
import jwt from "jsonwebtoken";
import { envs } from "../config/index.js";
import { Users } from "../services/index.js";

export const verifyJwtToken = async (req, res, next) => {
  try {
    const token = req.token;
    if (!token) throw StatusError.forbidden("");

    const decoded = jwt.verify(token, envs.jwt.accessToken.secret);
    if (!decoded) throw StatusError.unauthorized("");

    const user = await Users.getDataById(decoded.userId);

    req.user = {
      userId: user._id,
      email: user.email,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send({
        success: false,
        message: "Access token expired ",
      });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({
        success: false,
        message: "Access token invalid",
      });
    }
    next(error);
  }
};
