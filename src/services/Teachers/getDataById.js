import { Teachers } from "../../models/index.js";

export const getDataById = async (id) => {
  const data = await Teachers.findById(id);
  return data;
};
