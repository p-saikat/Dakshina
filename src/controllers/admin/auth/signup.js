import { StatusError } from "../../../config/StatusError.js";
import { Users } from "../../../services/index.js";
import bcrypt from "bcrypt";

/**
 * Admin Signup Service
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const signup = async (req, res, next) => {
  try {
    const reqBody = req.body;

    const { first_name, last_name, dob, email, gender, phone1, calling_code1, password } = reqBody;

    const encryptPassword = await bcrypt.hash(password, 10);

    const insertLastID = await Users.create({
      first_name,
      last_name,
      date_of_birth: dob,
      email,
      gender,
      phone1,
      calling_code1,
      role: "admin",
      password: encryptPassword,
    });

    if (insertLastID) {
      res.ok({
        success: true,
        message: "Admin registered successfully.",
      });
    } else {
      throw StatusError.badRequest("failed");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
