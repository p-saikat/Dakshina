import { StatusError } from "../../../config/StatusError.js";
import { Users, Teachers } from "../../../services/index.js";
import bcrypt from "bcrypt";

/**
 * Teacher Signup Service
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const signup = async (req, res, next) => {
  try {
    const reqBody = req.body;

    const {
      first_name,
      last_name,
      dob,
      email,
      gender,
      phone1,
      calling_code1,
      password,
      school_teacher,
    } = reqBody;

    const user = await Users.getDataByEmail(email);
    if (user) throw StatusError.badRequest("userAlreadyRegistered");

    const encryptPassword = await bcrypt.hash(password, 10);

    const insertLastID = await Users.create({
      first_name,
      last_name,
      date_of_birth: dob,
      email,
      gender,
      phone1,
      calling_code1,
      role: "teacher",
      password: encryptPassword,
    });

    if (insertLastID) {
      const insertLastTeacherID = Teachers.create({
        user_id: insertLastID._id,
        is_verified: false,
        school_teacher: school_teacher,
      });

      if (insertLastTeacherID) {
        res.ok({
          success: true,
          message: "Teacher registered successfully.",
        });
      } else {
        throw StatusError.badRequest("failed");
      }
    } else {
      throw StatusError.badRequest("failed");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
