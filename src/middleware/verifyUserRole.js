import { StatusError } from "../config/index.js";

export const verifyUserRole = async (...roles) => {
  return async function (req, res, next) {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      throw StatusError.forbidden();
    }
  };
};
