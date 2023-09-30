import { Users } from "../../models/index.js";

export const getDataById = async (id) => {
  const data = await Users.findById(id);
  return data;
};
