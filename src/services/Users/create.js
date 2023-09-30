import { Users } from "../../models/index.js";

export const create = async (params) => {
  const data = await Users.create(params);
  return data;
};
