import { Users } from "../../models/index.js";

export const getDataByEmail = async (email) => {
  const data = await Users.findOne({ email: email });
  return data;
};
