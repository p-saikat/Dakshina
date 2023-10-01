import { StatusError } from "../../../config/index.js";
import { Users } from "../../../services/index.js";
import { changeDateToDMY, getJwtToken } from "../../../helper/index.js";
import bcrypt from "bcrypt";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Users.getDataByEmailRole(email, "teacher");
    if (!user) throw StatusError.badRequest("badCredentials");

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw StatusError.badRequest("badCredentials");

    const jwt = await getJwtToken({ userId: user._id, email: user.email });

    const data = {
      user_id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      date_of_birth: await changeDateToDMY(user.date_of_birth),
      email: user.email,
      gender: user.gender,
      phone1: user.phone1,
      calling_code1: user.calling_code1,
      role: user.role,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };

    res.ok({ success: true, jwt, data });
  } catch (error) {
    next(error);
  }
};
