import { Users } from "../../models/index.js";

export const getDataByEmailRole = async (email, role) => {
  const data = await Users.findOne({ email: email, role: role });
  return data;
};
